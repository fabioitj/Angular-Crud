import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carro } from '../../carros.model';
import { CarrosService } from '../../carros.service';

@Component({
  selector: 'app-carros-create',
  templateUrl: './carros-create.component.html',
  styleUrls: ['./carros-create.component.css']
})
export class CarrosCreateComponent implements OnInit {

  carro : Carro = {
    marca: '',
    modelo: '',
    versao: '',
    preco: null,
    cor: ''
  };

  constructor(private carroService: CarrosService, private router: Router) { }

  ngOnInit(): void {
  }

  createCarro(): void {
    this.carroService.post(this.carro).subscribe((response) => {
      this.carroService.showMessage("Carro criado com sucesso!");
      this.router.navigate(["/carros"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/carros"]);
  }
}
