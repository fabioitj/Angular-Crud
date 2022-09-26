import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrosCreateComponent } from './components/carros/carros-create/carros-create/carros-create.component';
import { CarrosUpdateComponent } from './components/carros/carros-update/carros-update/carros-update.component';
import { CategoriasSaveComponent } from './components/categorias/categorias-save/categorias-save.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { CarrosCrudComponent } from './views/carros-crud/carros-crud/carros-crud.component';
import { CategoriasCrudComponent } from './views/categorias-crud/categorias-crud/categorias-crud.component';

import { HomeComponent } from "./views/home/home.component";
import { ProductCrudComponent } from "./views/product-crud/product-crud.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "produtos",
    component: ProductCrudComponent
  },
  {
    path: "produtos/create",
    component: ProductCreateComponent
  },
  {
    path: "produtos/update/:id",
    component: ProductUpdateComponent
  },
  {
    path: "carros",
    component: CarrosCrudComponent
  },
  {
    path: "carros/create",
    component: CarrosCreateComponent
  },
  {
    path: "carros/update/:id",
    component: CarrosUpdateComponent
  },
  {
    path: "categorias",
    component: CategoriasCrudComponent
  },
  {
    path: "categorias/save",
    component: CategoriasSaveComponent
  },
  {
    path: "categorias/save/:id",
    component: CategoriasSaveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
