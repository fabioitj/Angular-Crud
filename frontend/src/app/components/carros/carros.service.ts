import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Carro } from "./carros.model"

@Injectable({
  providedIn: 'root'
})
export class CarrosService {

  baseUrl: string = "http://localhost:3001/carros";

  constructor(private snackBar: MatSnackBar, private httpClient: HttpClient) { }

  get(): Observable<Carro[]> {
    return this.httpClient.get<Carro[]>(this.baseUrl);
  }

  getById(id: any): Observable<Carro> {
    const url: string = `${this.baseUrl}/${id}`;
    return this.httpClient.get<Carro>(url);
  }

  post(carro: any): Observable<Carro> {
    return this.httpClient.post<Carro>(this.baseUrl, carro);
  }

  put(carro: any): Observable<Carro> {
    const url: string = `${this.baseUrl}/${carro.id}`;
    return this.httpClient.put<Carro>(url, carro);
  }

  delete(id: any): Observable<Carro> {
    const url: string = `${this.baseUrl}/${id}`;
    return this.httpClient.delete<Carro>(url);
  }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }
}
