import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { EditComponent } from './edit/edit.component';

export interface Contact {
  name: string;
  phone: string;
}

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center; margin: auto;width: 30%;">
      <h1>
        Hello {{title}}!
      </h1>
      <img width="300" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
      <div [formGroup]="contactGroup">
        <mat-form-field class="full-width">
          <input #contactName matInput placeholder="Contact name" formControlName="contactName">
        </mat-form-field>
        <mat-form-field class="full-width">
          <input #contactPhone matInput placeholder="Phone number" formControlName="contactPhone">
        </mat-form-field>
        <div>
          <button class="button-margin" (click)="addContact()" type="submit" mat-raised-button>ADD CONTACT</button>  
          <button class="button-margin" (click)="clearContactList()" type="submit" mat-raised-button>CLEAR CONTACT LIST</button>
        </div>
      </div>
      <h2>Contact List</h2>
      <ul>
        <li *ngFor="let contact of contactList">
        <!--<img [src]="user.avatar"> -->
          <div class="left-side">
            <div>{{ contact.name }} </div>
            <div>{{ contact.phone }}</div>
          </div>
          <div class="right-side">
            <button mat-raised-button (click)="openDialog(contact)" data-cy="editButton">Edit</button>
          </div>
        </li>
      </ul>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'angular7-app';
  /* contactList: Contact[] = [
    {name: 'Redouan M', phone: '06123456'},
    {name: 'Redouan Z', phone: '06123456'},
    {name: 'Redouan X', phone: '06123456'},
  ]; */

  contactList: Contact[] = [];

  contactGroup = new FormGroup({
    contactName: new FormControl(''),
    contactPhone: new FormControl('')
  });

  constructor(public dialog: MatDialog) {}

  addContact() {
    if (this.contactGroup.value.contactName && this.contactGroup.value.contactPhone) {
      let contactObj = {
        name: this.contactGroup.value.contactName,
        phone: this.contactGroup.value.contactPhone
      };
      this.contactList.push(contactObj);
    }
  }
  
  clearContactList() {
    this.contactList = [];
  }

  openDialog(contact: Contact): void {
    const dialogRef = this.dialog.open(EditComponent, {
      width: '250px',
      /* data: {name: this.name, phone: this.phone} */
      data: {name: contact.name, phone: contact.phone}
    });

    dialogRef.afterClosed().subscribe(result => {
      for (let contactInfo of this.contactList) {
        if(contactInfo === contact) {
          contactInfo.name = result.name;
          contactInfo.phone = result.phone;
        }
      }

    });
  }
}
