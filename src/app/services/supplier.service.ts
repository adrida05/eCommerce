import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Supplier } from '../models/supplier.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {



  private apiUrl = `${environment.baseApi}`;

  public httpOpt = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*',
    })
  };

  constructor(
    private http: HttpClient
  ) { }


  getVersion() {
    return this.http.get<any>(`${this.apiUrl}/version`);
  }

  getUser() {
    return this.http.get<any>(`${this.apiUrl}/user`);
  }
  getSuppliers() {
    return this.http.get<Supplier[]>(`${this.apiUrl}/suppliers`, this.httpOpt);
  }

  updateSupplier(supplier: Supplier) {
    return this.http.put(`${this.apiUrl}/suppliers/${supplier.id}`, JSON.stringify(supplier), this.httpOpt);
  }

  addSupplier(supplier: Supplier) {
    return this.http.post(`${this.apiUrl}/suppliers`, JSON.stringify(supplier), this.httpOpt);
  }

  deleteSupplier(id: number) {
    return this.http.delete(`${this.apiUrl}/suppliers/${id}`);
  }
}
