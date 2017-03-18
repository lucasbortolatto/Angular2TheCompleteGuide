import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ShoppingListAddComponent } from './shopping-list-add.component';
import { ShoppingListComponent } from './shopping-list.component';


@NgModule({
    declarations:[
        ShoppingListAddComponent,
        ShoppingListComponent
    ],
    imports: [
        FormsModule,
        CommonModule
    ]
})

export class ShoppingListModule {
}