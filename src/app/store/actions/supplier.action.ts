import { Action } from '@ngrx/store';
import { Supplier } from 'src/app/models/supplier.model';

export const LOAD_SUPPLIERS = '[Supplier] Load suppliers';
export const LOAD_SUPPLIERS_SUCCESS = '[Supplier] Load suppliers success';
export const LOAD_SUPPLIERS_FAIL = '[Supplier] Load supplier fail';

/** UPDATE SUPPLIER */
export const UPDATE_SUPPLIER = '[Supplier] Update supplier';
export const UPDATE_SUPPLIER_SUCCESS = '[Supplier] Update supplier success';
export const UPDATE_SUPPLIER_FAIL = '[Supplier] Update supplier fail';

/** ADD SUPPLIER */
export const ADD_SUPPLIER = '[Supplier] Add supplier';
export const ADD_SUPPLIER_SUCCESS = '[Supplier] Add supplier success';
export const ADD_SUPPLIER_FAIL = '[Supplier] Add supplier fail';

/** DELETE SUPPLIER */
export const DELETE_SUPPLIER = '[Supplier] Delete supplier';
export const DELETE_SUPPLIER_SUCCESS = '[Supplier] Delete supplier success';
export const DELETE_SUPPLIER_FAIL = '[Supplier] Delete supplier fail';

export class LoadSupplier implements Action {
    readonly type = LOAD_SUPPLIERS;
}

export class LoadSupplierSucess implements Action {
    readonly type = LOAD_SUPPLIERS_SUCCESS;

    constructor(public payLoad: Supplier[]) {
    }
}

export class LoadSupplierFail implements Action {
    readonly type = LOAD_SUPPLIERS_FAIL;

    constructor(public payLoad: any) {
    }
}

export class UpdateSupplier implements Action {
    readonly type = UPDATE_SUPPLIER;

    constructor(public payLoad: any) {}
}

export class UpdateSupplierSuccess implements Action {
    readonly type = UPDATE_SUPPLIER_SUCCESS;

    constructor(public payLoad: any) {}
}

export class UpdateSupplierFail implements Action {
    readonly type = UPDATE_SUPPLIER_SUCCESS;

    constructor(public payLoad: any) {}
}

export class AddSupplier implements Action {
    readonly type = ADD_SUPPLIER;

    constructor(public payLoad: any) {}
}

export class AddSupplierSuccess implements Action {
    readonly type = ADD_SUPPLIER_SUCCESS;

    constructor(public payLoad: any) {}
}

export class AddSupplierFail implements Action {
    readonly type = ADD_SUPPLIER_FAIL;

    constructor(public payLoad: any) {}
}

export class DeleteSupplier implements Action {
    readonly type = DELETE_SUPPLIER;

    constructor(public payLoad: any) {}
}

export class DeleteSupplierSuccess implements Action {
    readonly type = DELETE_SUPPLIER_SUCCESS;

    constructor(public payLoad: any) {}
}

export class DeleteustomerFail implements Action {
    readonly type = DELETE_SUPPLIER_FAIL;

    constructor(public payLoad: any) {}
}

export type SupplierActions = LoadSupplier | LoadSupplierSucess | LoadSupplierFail |
    UpdateSupplier | UpdateSupplierSuccess | UpdateSupplierFail |
    AddSupplier | AddSupplierSuccess | AddSupplierFail |
    DeleteSupplier | DeleteSupplierSuccess | DeleteustomerFail;


