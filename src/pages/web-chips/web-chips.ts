import { Component, ViewChild, ElementRef, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import { StaticInjector } from '@angular/core/src/di/injector';
import { UsiSelectChipsComponent } from '../../components/usichips/usi-chips.component';
/**
 * Generated class for the WebChipsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  providers: [
    {
        provide: NG_VALUE_ACCESSOR,
        multi: true,
        useExisting: forwardRef(() => WebChipsPage),
    }
],
  selector: 'web-chips',
  templateUrl: 'web-chips.html',
})
export class WebChipsPage implements ControlValueAccessor{

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  formCtrl = new FormControl();
  elementosFiltrados: Observable<string[]>;
  //fruits: string[] = [''];
  elementosEscolhidos: Array<any> = [];
  //allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
@Input() valorAtrb: string;
@Input() elementos: Array<any>;
@Input () public placeholder: string;
@Output() selectionChange: EventEmitter<any[]> = new EventEmitter()

@ViewChild('myInput') myInput: ElementRef;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;
  private _value: any

   add(event: MatChipInputEvent): void {
  //   // Add fruit only when MatAutocomplete is not open
  //   // To make sure this does not conflict with OptionSelected Event
  //   if (!this.matAutocomplete.isOpen) {
  //     const input = event.input;
  //     const value = event.value;

  //     // Add our fruit
  //     if ((value || '').trim()) {
  //       this.fruits.push(value.trim());
  //     }

  //     // Reset the input value
  //     if (input) {
  //       input.value = '';
  //     }

  //     this.fruitCtrl.setValue(null);
  //   }
  }
  get value() {
    return this._value
}

set value(val) {
    this._value = val
    this.onChange(val)

    if (!this._value) {
        this.myInput.nativeElement.value = null
        this.elementosEscolhidos = []
    }
}


writeValue(obj: any): void {
    this.value = obj
}
registerOnChange(fn: any): void {
    this.onChange = fn
}
registerOnTouched(fn: any): void {
    this.onTouched = fn
}

onChange = (val) => {
  // esta funcao é criada vazia para que o registerOnChange sobreescreva com uma função que sincroniza as alteraçoes de valor entre o ANgular e o DOM
}
onTouched = () => {
}


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.elementosEscolhidos = this.fruitCtrl.valueChanges.pipe(
    //   startWith(null),
    //   map((fruit: string | null) => fruit ? this._filter(fruit) : this.elementos.slice()));
    
    this.elementosFiltrados = this.formCtrl.valueChanges.pipe(
      startWith(null),
      map((digitoOuObj) => {

          let valor = digitoOuObj ? (digitoOuObj[this.valorAtrb] ? digitoOuObj[this.valorAtrb] : digitoOuObj) : digitoOuObj
          return digitoOuObj ? this._filter(valor) : (this.elementos ? this.elementos.slice() : [])
      }));

  }
  
  ngAfterViewInit() {

  }

  
  remove(fruit: string): void {
    const index = this.elementosEscolhidos.indexOf(fruit);

    if (index >= 0) {
      this.elementosEscolhidos.splice(index, 1);
    }
    this.value = this.elementosEscolhidos;
    this.selectionChange.emit(this.elementosEscolhidos)

  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.onTouched()

    let elementoParaAdicionar = null
        if (event.option.value[this.valorAtrb]) {

            let obj = this.elementosEscolhidos
                .find(obj => obj[this.valorAtrb] == event.option.value[this.valorAtrb])

            if (!obj) {

                elementoParaAdicionar = event.option.value
            }
        } else if (this.elementosEscolhidos.indexOf(event.option.value) < 0) {

            elementoParaAdicionar = event.option.value
        }


    console.log('Selected', event.option.viewValue);
    let itemSelecionado = event.option.viewValue;
     let okSave: boolean = true; 
     //this.elementosEscolhidos = new Array;
    console.log(this.elementosEscolhidos)
    if(this.elementosEscolhidos != []){
      for(let i = 0;i < this.elementosEscolhidos.length; i++){
        if(this.elementosEscolhidos[i] == itemSelecionado){
          okSave = false;
          break;
        }else {
          okSave = true;
        }
      
    }
  }

  if (elementoParaAdicionar) {
    this.elementosEscolhidos.push(elementoParaAdicionar)
    this.value = this.elementosEscolhidos
    this.myInput.nativeElement.value = '';
    this.formCtrl.setValue(null);
    this.selectionChange.emit(this.elementosEscolhidos)
}
  //    if(okSave != false){
  //      console.log('evento', event)
  //   this.fruits.push(event.option.viewValue);
  //    }
  //   console.log('Lista', this.fruits)
  //   this.fruitInput.nativeElement.value = '';
  //   this.fruitCtrl.setValue(null);
  //   this.selectionChange.emit(this.fruits)
  //   console.log('valor do formControl', this.fruitCtrl)
  //   console.log('valor atribuido', this.valorAtrb)
    
   }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
console.log('todas frutas', this.elementos)
    let teste = 'fruit'
   
    return this.elementos.filter(fruit => `${fruit}.${this.valorAtrb}`.toLowerCase().indexOf(filterValue) === 0);
  }

  teste(params: any){
    console.log(params)
  }

  listarNoClick() {
    this.formCtrl.setValue('')
    this.myInput.nativeElement.blur()
    this.myInput.nativeElement.focus()
}
}
