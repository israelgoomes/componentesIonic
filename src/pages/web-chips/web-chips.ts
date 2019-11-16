import { Component, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl} from '@angular/forms';
import { StaticInjector } from '@angular/core/src/di/injector';
/**
 * Generated class for the WebChipsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'web-chips',
  templateUrl: 'web-chips.html',
})
export class WebChipsPage {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  //fruits: string[] = [''];
  fruits: Array<any> = [];
  //allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
@Input() valorAtrb: string;
@Input() allFruits: Array<any>;
@Input () dados: any;
@Output() change = this.fruits;
type = 'fruits'

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
    //   startWith(null),
    //   map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFruits.slice()));
    
  }
  
  @ViewChild('fruitInput') fruitInput: ElementRef;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;


  add(event: MatChipInputEvent): void {
    // Add fruit only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our fruit
      if ((value || '').trim()) {
        this.fruits.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.fruitCtrl.setValue(null);
    }
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    console.log('Selected', event.option.viewValue);
    let itemSelecionado = event.option.viewValue;
     let okSave: boolean = true; 
     //this.fruits = new Array;
    console.log(this.fruits)
    if(this.fruits != []){
      for(let i = 0;i < this.fruits.length; i++){
        if(this.fruits[i] == itemSelecionado){
          okSave = false;
          break;
        }else {
          okSave = true;
        }
      
    }
  }
     if(okSave != false){
       console.log('evento', event)
    this.fruits.push(event.option.viewValue);
     }
    console.log('Lista', this.fruits)
    //this.fruitInput.nativeElement.value = '';

    //this.fruitCtrl.setValue(null);
    console.log('valor do formControl', this.fruitCtrl)
    console.log('valor atribuido', this.valorAtrb)
    
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
console.log('todas frutas', this.allFruits)
    let teste = 'fruit'
   
    return this.allFruits.filter(fruit => `${fruit}.${this.valorAtrb}`.toLowerCase().indexOf(filterValue) === 0);
  }

  teste(params: any){
    console.log(params)
  }
}
