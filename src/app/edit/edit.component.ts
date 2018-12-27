import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Contact } from '../app.component';

@Component({
  selector: 'app-edit',
  /* templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'] */
  template: `
  <div mat-dialog-content>
    <p>Edit contact information</p>
    <mat-form-field>
      <input matInput [(ngModel)]="data.name">
    </mat-form-field>
    <mat-form-field>
      <input matInput [(ngModel)]="data.phone">
    </mat-form-field>
  </div>
  <div mat-dialog-actions>
    <button mat-button (click)="onNoClick()">No Thanks</button>
    <button mat-button [mat-dialog-close]="data" cdkFocusInitial data-cy="okButton">Ok</button>
  </div>
  `,
  styles: []
})
export class EditComponent {

  constructor(
    public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Contact) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
