import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { ProductGetDataSource } from './product-get-datasource';

@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.css']
})
export class ProductGetComponent implements OnInit, AfterViewInit {

  produtos: Product[] = [];
  
   @ViewChild(MatTable) 
  table!: MatTable<Product>;

  dataSource: ProductGetDataSource;

  displayedColumns = ['id', 'name', 'price', 'action'];

  constructor(private productService: ProductService, private router: Router) { 
    this.dataSource = new ProductGetDataSource();
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.productService.get().subscribe((response) => {
      this.dataSource.data = response
      this.table.dataSource = this.dataSource;
    });
  }
}
