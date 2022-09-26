import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { isNull } from 'mathjs';
import { Categoria } from '../categorias.model';
import { CategoriasService } from '../categorias.service';

@Component({
  selector: 'app-categorias-save',
  templateUrl: './categorias-save.component.html',
  styleUrls: ['./categorias-save.component.css']
})
export class CategoriasSaveComponent implements OnInit {

  title = "";

  categoria: Categoria = {
    id: null,
    descricao: ''
  };

  constructor(private categoriaService: CategoriasService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    if(this.categoriaService.isNull(id)){
      this.title = "Criar";
    }
    else{
      this.title = "Alterar";
    }
  }
  
  cancel():void {
    this.router.navigate(["/categorias"]);
  }

  saveProduct(): void {
    this.categoriaService.save(this.categoria).subscribe((response) => {
      let messageVerb = isNull(this.categoria.id) ? "criada" : "alterada";
      this.categoriaService.showMessage("Categoria " + messageVerb + " com sucesso!");
      this.router.navigate(["/categorias"]);
    })
  }

}
