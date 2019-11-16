import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';

/**
 * Generated class for the TesterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tester',
  templateUrl: 'tester.html',
})
export class TesterPage implements OnInit{

  allFruits: Array<any> =[];
  teste: string[];
  formGroup: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {

    this.formGroup = formBuilder.group({
      dados: ['']
    })
  }

 ngOnInit(){
  this.allFruits.push({id: 2, fruit: 'Aplle'}, {id: 1, fruit: 'Orange'})
 }

  salvar(){
    console.log(this.formGroup)
  }
   teste2(event: string){
     console.log('Teste', this.teste)
   }

}
