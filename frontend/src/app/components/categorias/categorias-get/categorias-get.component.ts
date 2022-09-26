import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { DialogConfigComponent } from '../../dialogs/dialog-config/dialog-config.component';
import { DialogConfigModel } from '../../dialogs/dialog.model';
import { Categoria } from '../categorias.model';
import { CategoriasService } from '../categorias.service';
import { CategoriasGetDataSource } from './categorias-get-datasource';

@Component({
  selector: 'app-categorias-get',
  templateUrl: './categorias-get.component.html',
  styleUrls: ['./categorias-get.component.css']
})
export class CategoriasGetComponent implements OnInit {

  produtos: Categoria[] = [];
  
   @ViewChild(MatTable) 
  table!: MatTable<Categoria>;

  dataSource: CategoriasGetDataSource;

  dialogConfig: DialogConfigModel = {
    titulo: "Atenção",
    subtitulo: 'Você deseja realmente excluir esta categoria?'
  };

  displayedColumns = ['id', 'descricao', 'action'];

  constructor(private categoriasService: CategoriasService, private dialog: MatDialog, private router: Router) { 
    this.dataSource = new CategoriasGetDataSource();
  }

  openDialogDelete(id: string): void {
    const dialogRef = this.dialog.open(DialogConfigComponent, {
      width: "400px",
      data: this.dialogConfig
    })

    dialogRef.afterClosed().subscribe(result => {
      if(result == true){
        this.categoriasService.delete(id).subscribe((response) => {
          this.categoriasService.showMessage("Produto excluído com sucesso!");
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
    this.categoriasService.get().subscribe((response) => {
      this.dataSource.data = response
      this.table.dataSource = this.dataSource;
    });
  }
}
