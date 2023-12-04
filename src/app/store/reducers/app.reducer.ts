import * as fromSupplierActions from '../actions/supplier.action';
import { Supplier } from 'src/app/models/supplier.model';

export interface SupplierState {
    data: Supplier[];
    loaded: boolean;
    loading: boolean;
    error: string;
}

export const initialState: SupplierState = {
    data: [],
    loaded: false,
    loading: false,
    error: ''
};

export function reducer(state = initialState, action: fromSupplierActions.SupplierActions) {
    switch (action.type) {
      case fromSupplierActions.LOAD_SUPPLIERS: {
          return {
              ...state,
              loading: true,
          };
      }

      case fromSupplierActions.LOAD_SUPPLIERS_SUCCESS: {
        const data = action.payLoad;
        return {
          ...state,
          loading: false,
          loaded: true,
          data
        };
      }

      case fromSupplierActions.LOAD_SUPPLIERS_FAIL: {
        return {
          ...state,
          loading: false,
          loaded: false,
          error: action.payLoad
        };
      }

      case fromSupplierActions.UPDATE_SUPPLIER_SUCCESS: {
        console.log('UPDATE_SUPPLIER_SUCCESS',state);
        const data = state.data;


        return {
          ...state,
          data,
          loaded: true,
          loading: false
        };
      }

      case fromSupplierActions.LOAD_SUPPLIERS_FAIL: {
        return {
          ...state,
          error: action.payLoad
        };
      }

      case fromSupplierActions.ADD_SUPPLIER_SUCCESS: {
        return {
          ...state,
          data: [...state.data, action.payLoad]
        };
      }

      case fromSupplierActions.ADD_SUPPLIER_FAIL: {
        return {
          ...state,
          error: action.payLoad
        };
      }

      case fromSupplierActions.DELETE_SUPPLIER_SUCCESS: {
        const userId = action.payLoad;
        return {
          ...state,
          data: [...state.data.filter(user => user.id !== userId)]
        };
      }

      case fromSupplierActions.DELETE_SUPPLIER_FAIL: {
        return {
          ...state,
          error: action.payLoad
        };
      }

      default: {
          return state;
      }
    }
}

export const getSuppliers = (state: SupplierState) => state.data;
export const getSuppliersLoaded = (state: SupplierState) => state.loaded;
export const getSuppliersLoading = (state: SupplierState) => state.loading;
export const getSuppliersError = (state: SupplierState) => state.error;
