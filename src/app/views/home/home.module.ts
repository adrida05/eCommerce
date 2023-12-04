import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { CommonModule } from "@angular/common";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { FooterModule } from "src/app/components/footer/footer.module";
import {MatButtonModule} from '@angular/material/button';


@NgModule({
    declarations: [
     HomeComponent,
  
    ],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      FooterModule,
      MatButtonModule,
      RouterModule.forChild([
        { path: '', component: HomeComponent }
      ]),
    ],
    providers: [
    ],
    exports: [
      HomeComponent,
    ]
  })
  export class HomeModule {
  }
  