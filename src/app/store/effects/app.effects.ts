import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import * as fromSuppliersActions from '../actions/supplier.action';

import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { SupplierService } from 'src/app/services/supplier.service';

@Injectable()
export class SupplierEffects {

  constructor(
    private action$: Actions,
    private supplierService: SupplierService
  ) {

  }

  // load Supplier
  @Effect()
  loadSuppliers$: Observable<Action> = this.action$.pipe(
    ofType(fromSuppliersActions.LOAD_SUPPLIERS),
    switchMap(() => this.supplierService.getSuppliers()
    .pipe(
      map(response => {
        return new fromSuppliersActions.LoadSupplierSucess(response);
      },
      catchError(error => of(new fromSuppliersActions.LoadSupplierFail(error)))
      )
    ))
  );

  // Update Supplier
  @Effect()
  updateSupplier$: Observable<Action> = this.action$.pipe(
    ofType(fromSuppliersActions.UPDATE_SUPPLIER),
    map((action: fromSuppliersActions.UpdateSupplier) => action.payLoad),
    switchMap((payLoad) => this.supplierService.updateSupplier(payLoad)
      .pipe(
        map(response => new fromSuppliersActions.UpdateSupplierSuccess(response)),
        catchError(error => of(new fromSuppliersActions.UpdateSupplierFail(error)))
      )
    )
  );

  // Add Supplier
  @Effect()
  addSupplier$: Observable<Action> = this.action$.pipe(
    ofType(fromSuppliersActions.ADD_SUPPLIER),
    map((action: fromSuppliersActions.AddSupplier) => action.payLoad),
    switchMap((payLoad) => this.supplierService.addSupplier(payLoad)
      .pipe(
        map(response => new fromSuppliersActions.AddSupplierSuccess(response)),
        catchError(error => of(new fromSuppliersActions.AddSupplierFail(error)))
      )
    )
  );

  // Delete Supplier
  @Effect()
  deleteSupplier$: Observable<Action> = this.action$.pipe(
    ofType(fromSuppliersActions.DELETE_SUPPLIER),
    map((action: fromSuppliersActions.DeleteSupplier) => action.payLoad),
    switchMap((payLoad: number) => this.supplierService.deleteSupplier(payLoad)
      .pipe(
        map(() => new fromSuppliersActions.DeleteSupplierSuccess(payLoad)),
        catchError(error => of(new fromSuppliersActions.DeleteustomerFail(error)))
      )
    )
  );
}
