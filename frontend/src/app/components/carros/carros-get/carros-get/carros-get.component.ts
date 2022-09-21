import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { DialogConfigComponent } from 'src/app/components/dialogs/dialog-config/dialog-config.component';
import { DialogConfigModel } from 'src/app/components/dialogs/dialog.model';
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

  dialogConfig: DialogConfigModel = {
    titulo: "Atenção",
    subtitulo: 'Você deseja realmente excluir este carro?'
  };

  displayedColumns = ['id', 'marca', 'modelo', 'versao', 'preco', 'cor', 'action'];

  constructor(private carroService: CarrosService, private dialog: MatDialog, private _router: Router) { 
    this.dataSource = new CarroGetDataSource();
  }

  openDialogDelete(id: string): void {
    const dialogRef = this.dialog.open(DialogConfigComponent, {
      width: "400px",
      data: this.dialogConfig
    })

    dialogRef.afterClosed().subscribe(result => {
      if(result == true){
        this.carroService.delete(id).subscribe((response) => {
          this.carroService.showMessage("Carro excluído com sucesso!");
          this.reloadCurrentRoute();
        })
      }
    });
  }

  reloadCurrentRoute() {
    let currentUrl = this._router.url;
    this._router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this._router.navigate([currentUrl]);
        console.log(currentUrl);
    });
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
