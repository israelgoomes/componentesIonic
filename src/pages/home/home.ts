import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

allFruits: Array<any> = []
  constructor(public navCtrl: NavController) {

  }

  ngOnInit(){
    this.allFruits.push({id: 2, fruit: 'Aplle'}, {id: 1, fruit: 'Orange'})
    console.log(this.allFruits)
  }
  openChips(){
    this.navCtrl.setRoot('TesterPage');
  }

  salvar(){
    console.log(this.allFruits)
  }

  openPagination(){
    this.navCtrl.setRoot('PaginationPage')
  }
}
