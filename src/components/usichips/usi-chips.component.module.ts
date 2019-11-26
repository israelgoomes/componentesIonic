import { NgModule } from "@angular/core";
import { IonicModule } from 'ionic-angular';
import { MatIconModule, MatChipsModule, MatAutocompleteModule, MatFormFieldModule } from "@angular/material";
import { UsiSelectChipsComponent } from "./usi-chips.component";

@NgModule({
    declarations: [
        UsiSelectChipsComponent
    ],
    imports: [
        MatFormFieldModule,
        MatAutocompleteModule,
        MatIconModule,
        MatChipsModule,
        IonicModule,

    ],
    exports: [
        UsiSelectChipsComponent
    ]
})
export class UsiSelectChipsComponentModule { }