import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DialogConfigComponent } from '../../dialogs/dialog-config/dialog-config.component';
import { DialogConfigModel } from '../../dialogs/dialog.model';
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

  dialogConfig: DialogConfigModel = {
    titulo: "Atenção",
    subtitulo: 'Você deseja realmente excluir este produto?'
  };

  displayedColumns = ['id', 'name', 'price', 'action'];

  constructor(private productService: ProductService, private dialog: MatDialog, private router: Router) { 
    this.dataSource = new ProductGetDataSource();
  }

  openDialogDelete(id: string): void {
    const dialogRef = this.dialog.open(DialogConfigComponent, {
      width: "400px",
      data: this.dialogConfig
    })

    dialogRef.afterClosed().subscribe(result => {
      if(result == true){
        this.productService.delete(id).subscribe((response) => {
          this.productService.showMessage("Produto excluído com sucesso!");
          this.reloadCurrentRoute();
        })
      }
    });
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
        console.log(currentUrl);
    });
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.productService.get().subscribe((response) => {
      this.dataSource.data = response
      console.log(response);
      this.table.dataSource = this.dataSource;
    });
  }
}
