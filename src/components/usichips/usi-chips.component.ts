import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, ViewChild, Output, EventEmitter, Input, forwardRef } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ChangeDetectorRef } from '@angular/core';

@Component({
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef(() => UsiSelectChipsComponent),
        }
    ],
    selector: 'usi-chips',
    templateUrl: 'usi-chips.component.html'
})
export class UsiSelectChipsComponent implements ControlValueAccessor {

    @Input() public atributoExibicao: string
    @Input() public placeholder: string
    @Input() public atributoIdentificadorObjetosEscolhidos: string

    visible = true;
    selectable = true;
    removable = true;
    addOnBlur = false;
    separatorKeysCodes: number[] = [ENTER, COMMA];
    formCtrl = new FormControl();
    elementosFiltrados: Observable<any[]>;
    elementosEscolhidos: any[] = [];
    @Input() public elementos: any[] = [];

    @Output() selectionChange: EventEmitter<any[]> = new EventEmitter()

    @ViewChild('myInput') myInput: ElementRef;
    @ViewChild('auto') matAutocomplete: MatAutocomplete;

    @Input() public disabled: boolean = false
    private _value: any

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



    constructor(private cdRef: ChangeDetectorRef) {


        this.elementosFiltrados = this.formCtrl.valueChanges.pipe(
            startWith(null),
            map((digitoOuObj) => {

                let valor = digitoOuObj ? (digitoOuObj[this.atributoExibicao] ? digitoOuObj[this.atributoExibicao] : digitoOuObj) : digitoOuObj
                return digitoOuObj ? this._filter(valor) : (this.elementos ? this.elementos.slice() : [])
            }));
    }

    ngAfterViewInit() {

    }




    add(event: MatChipInputEvent): void {
        // // Add element only when MatAutocomplete is not open
        // // To make sure this does not conflict with OptionSelected Event
        // if (!this.matAutocomplete.isOpen) {
        //   const input = event.input;
        //   const value = event.value;

        //  
        //   if ((value || '').trim()) {
        //     //this.elementosEscolhidos.push(value.trim());
        //   }

        //   // Reset the input value
        //   if (input) {
        //     input.value = '';
        //   }

        //   this.formCtrl.setValue(null);
        // }
    }

    remove(elemento: any): void {
        const index = this.elementosEscolhidos.indexOf(elemento);

        if (index >= 0) {
            this.elementosEscolhidos.splice(index, 1);
        }
        this.value = this.elementosEscolhidos
        this.selectionChange.emit(this.elementosEscolhidos)
    }

    selected(event: MatAutocompleteSelectedEvent): void {

        this.onTouched()

        let elementoParaAdicionar = null
        if (event.option.value[this.atributoIdentificadorObjetosEscolhidos]) {

            let obj = this.elementosEscolhidos
                .find(obj => obj[this.atributoIdentificadorObjetosEscolhidos] == event.option.value[this.atributoIdentificadorObjetosEscolhidos])

            if (!obj) {

                elementoParaAdicionar = event.option.value
            }
        } else if (this.elementosEscolhidos.indexOf(event.option.value) < 0) {

            elementoParaAdicionar = event.option.value
        }

        if (elementoParaAdicionar) {
            this.elementosEscolhidos.push(elementoParaAdicionar)
            this.value = this.elementosEscolhidos
            this.myInput.nativeElement.value = '';
            this.formCtrl.setValue(null);
            this.selectionChange.emit(this.elementosEscolhidos)
        }

    }

    selecionarViaCarregamento(chavesSelecionadas: any[], carregados) {
        this.elementosEscolhidos = []

        if (chavesSelecionadas && chavesSelecionadas.length > 0) {

            if (carregados && carregados[0] && carregados[0][this.atributoIdentificadorObjetosEscolhidos]) {
                chavesSelecionadas.map(chave => {
                    let encontrado = carregados.find(p => p[this.atributoIdentificadorObjetosEscolhidos] == chave);
                    if (encontrado) {
                        this.elementosEscolhidos.push(encontrado);
                        this.value = this.elementosEscolhidos;
                        this.cdRef.detectChanges();
                    }
                });
            } else {
                chavesSelecionadas.map(chave => {
                    let encontrado = carregados.find(p => p == chave);
                    if (encontrado) {
                        this.elementosEscolhidos.push(encontrado);
                        this.value = this.elementosEscolhidos;
                        this.cdRef.detectChanges();
                    }
                });
            }
        }
    }

    private _filter(value: string): any[] {
        const filterValue = value ? value.toLowerCase() : value;
        if (this.elementos)
            return this.elementos.filter(obj => obj[this.atributoExibicao].toLowerCase().includes(filterValue));
        else return []
    }


    //solução para contornar problema ao clicar e não abrir a lista
    listarNoClick() {
        this.formCtrl.setValue('')
        this.myInput.nativeElement.blur()
        this.myInput.nativeElement.focus()
    }
}
