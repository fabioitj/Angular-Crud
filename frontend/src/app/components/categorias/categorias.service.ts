import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Categoria } from './categorias.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  baseUrl = "http://localhost:3001/";

  constructor(private snackBar: MatSnackBar, private httpClient: HttpClient) { }

  get(): Observable<Categoria[]> {
    return this.httpClient.get<Categoria[]>(this.baseUrl + "categorias");
  }

  save(categoria: Categoria): Observable<Categoria> {
    if(this.isNull(categoria.id)){
      return this.httpClient.post<Categoria>(this.baseUrl + "categorias", categoria);
    }
    else{
      return this.httpClient.put<Categoria>(this.baseUrl + "categorias/" + categoria.id, categoria);
    }
  }

  delete(id: any): Observable<Categoria> {
    return this.httpClient.delete<Categoria>(this.baseUrl + "categorias/" + id);
  }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }

  isNull(item: any): boolean {
    if(item == null || item == undefined || item == "")
      return true;

    return false;
  }
}
