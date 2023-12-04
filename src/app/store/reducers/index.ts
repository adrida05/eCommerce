import * as fromSupplierReducer from './app.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface AppState {
    suppliers: fromSupplierReducer.SupplierState;
}

export const reducers = {
    suppliers: fromSupplierReducer.reducer
};

export const getState = (state) => state;

export const getStateSuppliersState = createFeatureSelector<fromSupplierReducer.SupplierState>('suppliers');
export const getSuppliers = createSelector(getStateSuppliersState, fromSupplierReducer.getSuppliers);

export const getSupplierById = (id) => createSelector(getSuppliers, (suppliers) => {
    if (suppliers) {
        const supplierFound = suppliers.find(row => row.id === id);
        console.log('getSupplierById',supplierFound);
        return supplierFound || {};
    } else {
        return {};
    }
});
