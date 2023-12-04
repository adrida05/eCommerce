import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SuppliersComponent } from "./suppliers.component";
import { AngularMaterialModule } from "src/app/material.module";
import { SupplierFormDialog } from "./form/supplier-form-dialog";
import { AlertComponent } from "src/app/components/alert/alert.component";
import { ToastrModule } from 'ngx-toastr';

@NgModule({
    declarations: [
      SuppliersComponent,
      SupplierFormDialog,
      AlertComponent
    ],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      AngularMaterialModule,
      RouterModule.forChild([
        { path: '', component: SuppliersComponent }
      ]),
      ToastrModule.forRoot(), // ToastrModule added

    ],
    providers: [
    ],
    exports: [
      SuppliersComponent,
    ]
  })
  export class SuppliersModule {
  }
  