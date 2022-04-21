import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormActionsComponent } from './components/mat-form-actions/mat-form-actions.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
    declarations: [
        MatFormActionsComponent
    ],
    imports: [
        CommonModule,
        FlexLayoutModule
    ],
    exports: [
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatFormActionsComponent
    ]
})
export class MaterialUiModule {
}
