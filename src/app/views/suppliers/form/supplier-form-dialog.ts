import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Store } from "@ngrx/store";
import { ToastrService } from "ngx-toastr";
import { Supplier } from "src/app/models/supplier.model";
import { AppState } from "src/app/store";
import * as fromStore from 'src/app/store';

@Component({
    selector: 'supplier-form-dialog',
    templateUrl: 'supplier-form-dialog.html',
    styleUrls: ['./supplier-form-dialog.scss'],
})
export class SupplierFormDialog implements OnInit {
    constructor(public dialogRef: MatDialogRef<SupplierFormDialog>,
        @Inject(MAT_DIALOG_DATA) public data: Supplier,
        private store: Store<AppState>,
        private toastr: ToastrService
    ) { }

    isEditModeEnabled: boolean = false;
    isSubmitted: boolean = false;

    public ngOnInit(): void {
        console.log('Cargar detalle proveedor', this.data);
    }


    guardar() {
        this.isSubmitted = true;
        if (!this.data.nombre || !this.data.direccion
            || !this.data.razon_social) {
        }
        console.log('guardar',this.data);
        if (this.data.id === 0) {
            this.store.dispatch(new fromStore.AddSupplier(this.data));
            this.toastr.success('¡El proveedor ha sido guardado', '');
            this.dialogRef.close();
        }
        else {

            this.store.dispatch(new fromStore.UpdateSupplier(this.data));
            this.toastr.success('¡El proveedor ha sido actualizado');
            this.dialogRef.close();
        }

    }


    cerrar() {
        this.isSubmitted = false;
        this.dialogRef.close();
    }

}