import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormActionsComponent } from './components/mat-form-actions/mat-form-actions.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldInfoComponent } from './components/mat-form-field-info/mat-form-field-info.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';


@NgModule({
    declarations: [
        MatFormActionsComponent,
        MatFormFieldInfoComponent
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatIconModule
    ],
    exports: [
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatFormActionsComponent,
        MatFormFieldInfoComponent,
        MatIconModule,
        MatSnackBarModule,
        MatToolbarModule,
        MatListModule
    ]
})
export class MaterialUiModule {
}
