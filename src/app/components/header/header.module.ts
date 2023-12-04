import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    HeaderComponent
  ],
    imports: [
        RouterModule,
        CommonModule,
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
    ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule {
}
