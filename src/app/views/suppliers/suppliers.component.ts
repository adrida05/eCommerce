import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Supplier } from 'src/app/models/supplier.model';
import { AppState } from 'src/app/store';
import { MatDialog } from '@angular/material/dialog';

import * as fromStore from 'src/app/store';
import { SupplierFormDialog } from './form/supplier-form-dialog';
import { AlertComponent } from 'src/app/components/alert/alert.component';

import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss'],

})
export class SuppliersComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  suppliers: Supplier[] = [];
  displayedColumns: string[] = [ 'nombre', 'razon_social',  'direccion','activo', 'acciones'];
  dataSource = new MatTableDataSource<any>([]);
  isEditModeEnabled: boolean = false;
  supplier: Supplier = {};
  alert: {
    type: 'success',
    message: ''
  };
  showAlert = false;

  constructor(
    private router: Router,
    private store: Store<AppState>,
    public dialog: MatDialog,
    private toastr: ToastrService
  ) {

    store.select(fromStore.getSuppliers).subscribe(res => {

      let listData = [];
      for (const prop in res) {

        let index = Number(prop);
        const objCopy = { ...res[index] }; // 👈️ create copy
        objCopy.id = index;
        listData.push(objCopy);
      }
      this.dataSource.data = listData;
      console.log('getSuppliers Result', listData);
    });
    /*store.select(fromStore.getSupplierById(2)).subscribe(res => {

    });*/
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  }

  ngOnInit(): void {
    this.supplier = {};
    this.loadData();
  }

  loadData(): void {
    console.log('Cargar listado');
    this.store.dispatch(new fromStore.LoadSupplier());
  }

  mostrarAlerta(row) {
    console.log(row);
    this.supplier = row;
    const dialogRef = this.dialog.open(AlertComponent, {
      width: '450px',
      data: {
        message: '¿Deseas eliminar el Proveedor?',
        closeText: 'Cancelar',
        okText: 'Continuar',
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Eliminar proveedor**', result);
      if (result == 'confirm') {
        this.eliminarRegistro(this.supplier.id);
      
      }

    });
  }


  eliminarRegistro(id: number): void {
    if (id !== undefined) {
      this.store.dispatch(new fromStore.DeleteSupplier(id));
      this.toastr.success('¡El proveedor ha sido eliminado');
      this.loadData();
    }
  }

  detalleRegistro(supplier: Supplier): void {
    this.isEditModeEnabled = true;
    this.supplier = { ...supplier };
    console.log('detalleRegistro', this.supplier);
    const dialogRef = this.dialog.open(SupplierFormDialog, {
      width: '450px',
      data: {
        id: this.supplier.id,
        nombre: this.supplier.nombre,
        razon_social: this.supplier.razon_social,
        activo: true,
        estatus: "alta",
        direccion: this.supplier.direccion,
      },
    });

    dialogRef.afterClosed().subscribe(result => {

      console.log('detalleRegistro.result', result);
      this.loadData();
      
    });
  }


  openModalDialog() {
    this.isEditModeEnabled = false;
    const dialogRef = this.dialog.open(SupplierFormDialog, {
      width: '450px',
      data: { id: 0, nombre: '', apellido: '', activo: true, estatus: "alta", descripcion: "", monto: 0 },
    });

    dialogRef.afterClosed().subscribe(result => {

      this.loadData();


    });
  }

  closeModal(myForm: NgForm) {
    myForm.reset();
  }


}

