import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WebChipsPage } from './web-chips';
import { MatSelectModule, MatExpansionModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule, 
  MatFormFieldControl, MatChipsModule, MatIconModule} from '@angular/material'

@NgModule({
  declarations: [
    WebChipsPage
  ],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatSelectModule,
    MatChipsModule,
    MatIconModule,
    IonicPageModule.forChild(WebChipsPage),
  ],
  schemas: [ 
    CUSTOM_ELEMENTS_SCHEMA 
  ],
  exports: [WebChipsPage]
})
export class WebChipsPageModule {}
