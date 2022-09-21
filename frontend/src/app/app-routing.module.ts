import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrosCreateComponent } from './components/carros/carros-create/carros-create/carros-create.component';
import { CarrosDeleteComponent } from './components/carros/carros-delete/carros-delete/carros-delete.component';
import { CarrosUpdateComponent } from './components/carros/carros-update/carros-update/carros-update.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { CarrosCrudComponent } from './views/carros-crud/carros-crud/carros-crud.component';

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
    path: "produtos/delete/:id",
    component: ProductDeleteComponent
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
    path: "carros/delete/:id",
    component: CarrosDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
