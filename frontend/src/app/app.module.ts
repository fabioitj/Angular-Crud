import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { RedDirective } from './directives/red.directive';
import { ProductCreateComponent } from './components/product/product-create/product-create.component'
import { MatButtonModule } from "@angular/material/button"
import { MatSnackBarModule } from "@angular/material/snack-bar"
import { HttpClientModule } from "@angular/common/http"
import { FormsModule } from "@angular/forms"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatInputModule } from "@angular/material/input";
import { ProductGetComponent } from './components/product/product-get/product-get.component'
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { CarrosCrudComponent } from './views/carros-crud/carros-crud/carros-crud.component';
import { CarrosGetComponent } from './components/carros/carros-get/carros-get/carros-get.component';
import { CarrosUpdateComponent } from './components/carros/carros-update/carros-update/carros-update.component';
import { CarrosCreateComponent } from './components/carros/carros-create/carros-create/carros-create.component';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogConfigComponent } from './components/dialogs/dialog-config/dialog-config.component';
import { CategoriasCrudComponent } from './views/categorias-crud/categorias-crud/categorias-crud.component';
import { CategoriasGetComponent } from './components/categorias/categorias-get/categorias-get.component';
import { CategoriasSaveComponent } from './components/categorias/categorias-save/categorias-save.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    RedDirective,
    ProductCreateComponent,
    ProductGetComponent,
    ProductUpdateComponent,
    CarrosCrudComponent,
    CarrosGetComponent,
    CarrosUpdateComponent,
    CarrosCreateComponent,
    DialogConfigComponent,
    CategoriasCrudComponent,
    CategoriasGetComponent,
    CategoriasSaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatDialogModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
