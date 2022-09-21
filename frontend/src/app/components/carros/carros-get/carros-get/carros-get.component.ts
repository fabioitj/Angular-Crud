import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { Carro } from '../../carros.model';
import { CarrosService } from '../../carros.service';
import { CarroGetDataSource } from './carros-get-datasource';

@Component({
  selector: 'app-carros-get',
  templateUrl: './carros-get.component.html',
  styleUrls: ['./carros-get.component.css']
})
export class CarrosGetComponent implements OnInit, AfterViewInit {

  produtos: Carro[] = [];
  
   @ViewChild(MatTable) 
  table!: MatTable<Carro>

  dataSource: CarroGetDataSource;

  displayedColumns = ['id', 'marca', 'modelo', 'versao', 'preco', 'cor', 'action'];

  constructor(private carroService: CarrosService, private router: Router) { 
    this.dataSource = new CarroGetDataSource();
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.carroService.get().subscribe((response) => {
      console.log(response);
      this.dataSource.data = response
      this.table.dataSource = this.dataSource;
    });
  }

}
