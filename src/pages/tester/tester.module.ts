import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TesterPage } from './tester';
import { WebChipsPageModule} from '../web-chips/web-chips.module'

@NgModule({
  declarations: [
    TesterPage,
    
  ],
  imports: [
    WebChipsPageModule,
    IonicPageModule.forChild(TesterPage),
  ],
  schemas: [ 
    CUSTOM_ELEMENTS_SCHEMA 
  ]
})
export class TesterPageModule {}
