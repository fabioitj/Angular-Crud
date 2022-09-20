import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product = {
    name: '',
    price : null
  };

  id: any;

  constructor(private productService: ProductService, private router: Router,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.productService.getById(this.id).subscribe((response) => {
      this.product = response;
    })
  }

  deleteProduct() : void {
    this.productService.delete(this.id).subscribe((response) => {
      this.productService.showMessage("Produto excluido com sucesso!");
      this.router.navigate(["/produtos"]);
    })
  }

  cancel(): void {
    this.router.navigate(["/produtos"]);
  }
}
