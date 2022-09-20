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

  getById(id: string): Observable<Carro> {
    const url: string = `${this.baseUrl}/${id}`;
    return this.httpClient.get<Carro>(url);
  }
}
