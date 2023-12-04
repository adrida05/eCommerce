import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  user: string = '';
  constructor(private router: Router,
    private supplierService: SupplierService) {
  }

  next(): void {
    this.router.navigate(['/proveedores']);
  }

  ngOnInit(): void {
    this.supplierService.getUser().subscribe(response => {
      if (response != null) {
        this.user = response.user;
      }
    });


  }

}
