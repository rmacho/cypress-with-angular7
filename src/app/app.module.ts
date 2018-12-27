import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DemoMaterialModule} from './material-module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatNativeDateModule} from '@angular/material';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
    MatNativeDateModule
  ],
  entryComponents: [EditComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
