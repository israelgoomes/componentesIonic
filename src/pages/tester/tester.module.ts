import { NgModule, CUSTOM_ELEMENTS_SCHEMA, forwardRef } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TesterPage } from './tester';
import { WebChipsPageModule} from '../web-chips/web-chips.module'
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { WebChipsPage } from '../web-chips/web-chips';
import { UsiSelectChipsComponentModule } from '../../components/usichips/usi-chips.component.module';

@NgModule({
  declarations: [
    TesterPage,
    
  ],
  imports: [
    WebChipsPageModule,
    UsiSelectChipsComponentModule,
    IonicPageModule.forChild(TesterPage),
  ],
  schemas: [ 
    CUSTOM_ELEMENTS_SCHEMA 
  ]
})
export class TesterPageModule {}
