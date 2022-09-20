import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ProductService } from 'src/app/components/product/product.service';
import { Product } from 'src/app/components/product/product.model';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
  }

  navigateToCreate(): void {
    this.router.navigate(['/produtos/create']);
  }
}
