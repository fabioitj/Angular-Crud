import { DialogConfig } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogConfigModel } from '../dialog.model';

@Component({
  selector: 'app-dialog-config',
  templateUrl: './dialog-config.component.html',
  styleUrls: ['./dialog-config.component.css']
})
export class DialogConfigComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DialogConfig>, 
    @Inject(MAT_DIALOG_DATA) public data: DialogConfigModel) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }


}
