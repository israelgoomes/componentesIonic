import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaginationPage } from './pagination';
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatTableModule } from "@angular/material/table"
import { MatInputModule } from '@angular/material/input'

@NgModule({
  declarations: [
    PaginationPage,
  ],
  imports: [
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    IonicPageModule.forChild(PaginationPage),
  ],
})
export class PaginationPageModule {}
