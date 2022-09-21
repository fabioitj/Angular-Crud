import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Carro } from '../../carros.model';
import { CarrosService } from '../../carros.service';

@Component({
  selector: 'app-carros-delete',
  templateUrl: './carros-delete.component.html',
  styleUrls: ['./carros-delete.component.css']
})
export class CarrosDeleteComponent implements OnInit {

  carro : Carro = {
    marca: '',
    modelo: '',
    versao: '',
    preco: null,
    cor: ''
  };

  constructor(private carroService: CarrosService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.carroService.getById(id).subscribe((response) => {
      this.carro = response;
    })
  }


  deleteCarro(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.carroService.delete(id).subscribe((response) => {
      this.carroService.showMessage("Carro excluido com sucesso!");
      this.router.navigate(["/carros"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/carros"]);
  }
}
