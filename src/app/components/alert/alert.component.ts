import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
})
export class AlertComponent  {

  constructor(public dialogRef: MatDialogRef<AlertComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any) {

  }

}
