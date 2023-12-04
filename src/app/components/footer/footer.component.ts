import { Component, Input, OnInit } from '@angular/core';
import { SupplierService } from 'src/app/services/supplier.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{


  version: string = '';

  constructor(private supplierService: SupplierService) {
  }

  ngOnInit(): void {
    this.supplierService.getVersion().subscribe(response => {
      if (response != null) {
        this.version = response.version;
      }
    });


  }
}
