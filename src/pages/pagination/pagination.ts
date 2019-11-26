import { Component, ViewChild, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MatPaginator, MatTableDataSource, PageEvent, MatPaginatorIntl} from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { overrideFunction } from '@ionic-native/core';
import { Subject } from 'rxjs/Subject';
import * as moment from 'moment';

/**
 * Generated class for the PaginationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagination',
  templateUrl: 'pagination.html',
})
export class PaginationPage extends MatPaginatorIntl implements OnInit{
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  formGroup: any;
  list: Array<any> = [];
  nextPageLabel: string;
  listaEditada: Array<Element> = [];
  delete: boolean = false;
  listaDelete: Array<Element> = [];


  @ViewChild(MatPaginator) paginator: MatPaginator;

constructor(public fn: FormBuilder){
  super();
  this.formGroup = new FormGroup({
    teste: new FormControl('')
  })



}
ngOnInit(){
  this.list.push(

    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
    {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
    {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
    {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
    {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
    {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
    {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
    {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
    {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
    {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'}

  )

}
  // MatPaginator Inputs
  length = this.list.length;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;
  changes: Subject<void>
  //teste = new getRangeLabel()

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  getRangeLabel = (page: number, pageSize: number, length: number)=>{ 
    if (length == 0 || pageSize == 0) { 
      return `0 of ${length}`; 
    } 
    length = Math.max(length, 0); const startIndex = page * pageSize; 
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize; 
    return `${startIndex + 1} – ${endIndex} of ${length}`;
   }

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }


  salvar(){
    let listaAux: Array<any> = [];
    this.listaEditada.forEach(i=>{
      i.dtTimesTamp = moment(new Date()).format("DD/MM/YYYY HH:mm:ss");
      listaAux.push(i)
    })
    console.log('itens editados', this.listaEditada)
    this.listaDelete.forEach(v=>{
      v.inExclusaoLogica = 'S';
      delete(v.deletable);
      listaAux.push(v);
    })
    console.log('itens deletados', this.listaDelete)
    console.log('Lista completa', listaAux)
      this.ngOnInit();
  }

  teste(params: any){
    const index = this.listaEditada.indexOf(params);
    //console.log('index ',index)
    if(index == -1){
    this.listaEditada.push(params)
    }
    //console.log(this.listaEditada)
  }


  adicionaDelete(params: Element){
    console.log(params)
    params.deletable = true;
    this.listaDelete.push(params);
    console.log(this.listaDelete)
    
  }

  removeDelete(params: Element){
    const index = this.listaDelete.indexOf(params)
    this.listaDelete.splice(index, 1);
    console.log(this.listaDelete)
    params.deletable = false;
  }
}

export interface Element {
  name: string;
  position: number;
  deletable: boolean;
  inExclusaoLogica: string;
  dtTimesTamp: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', deletable: false, inExclusaoLogica: 'S', dtTimesTamp: null},
  {position: 2, name: 'Helium', deletable: false, inExclusaoLogica: 'S',dtTimesTamp: null},
  {position: 3, name: 'Lithium', deletable: false, inExclusaoLogica: 'S', dtTimesTamp: null},
  {position: 4, name: 'Beryllium', deletable: false, inExclusaoLogica: 'S', dtTimesTamp: null},
  {position: 5, name: 'Boron', deletable: false, inExclusaoLogica: 'S', dtTimesTamp: null},
  {position: 6, name: 'Carbon', deletable: false, inExclusaoLogica: 'S', dtTimesTamp: null},
  {position: 7, name: 'Nitrogen', deletable: false, inExclusaoLogica: 'S', dtTimesTamp: null},
  {position: 8, name: 'Oxygen', deletable: false, inExclusaoLogica: 'S', dtTimesTamp: null},
  {position: 9, name: 'Fluorine', deletable: false, inExclusaoLogica: 'S', dtTimesTamp: null},
  {position: 10, name: 'Neon', deletable: false, inExclusaoLogica: 'S', dtTimesTamp: null},
  {position: 11, name: 'Sodium', deletable: false, inExclusaoLogica: 'S', dtTimesTamp: null},
  {position: 12, name: 'Magnesium', deletable: false, inExclusaoLogica: 'S', dtTimesTamp: null},
  {position: 13, name: 'Aluminum', deletable: false, inExclusaoLogica: 'S', dtTimesTamp: null},
  {position: 14, name: 'Silicon', deletable: false, inExclusaoLogica: 'S', dtTimesTamp: null},
  {position: 15, name: 'Phosphorus', deletable: false, inExclusaoLogica: 'S', dtTimesTamp: null},
  {position: 16, name: 'Sulfur', deletable: false, inExclusaoLogica: 'S', dtTimesTamp: null},
  {position: 17, name: 'Chlorine', deletable: false, inExclusaoLogica: 'S', dtTimesTamp: null},
  {position: 18, name: 'Argon', deletable: false, inExclusaoLogica: 'S', dtTimesTamp: null},
  {position: 19, name: 'Potassium', deletable: false, inExclusaoLogica: 'S', dtTimesTamp: null},
  {position: 20, name: 'Calcium', deletable: false, inExclusaoLogica: 'S', dtTimesTamp: null},
];