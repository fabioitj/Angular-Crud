import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Carro } from '../../carros.model';
import { CarrosService } from '../../carros.service';

@Component({
  selector: 'app-carros-update',
  templateUrl: './carros-update.component.html',
  styleUrls: ['./carros-update.component.css']
})
export class CarrosUpdateComponent implements OnInit {

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

  updateCarro(): void {
    this.carroService.put(this.carro).subscribe((response) => {
      this.carroService.showMessage("Carro alterado com sucesso!");
      this.router.navigate(["/carros"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/carros"]);
  }

}
