import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'home' },
 // { path: '404-not-found', pathMatch: 'full', loadChildren: () => import('app/views/admin/pages/error/error-404/error-404.module').then(m => m.Error404Module) },
  {
    path: 'home',
    loadChildren: () =>
      import('./views/home/home.module').then(
        (mod) => mod.HomeModule
      ),
  },
  {
    path: 'proveedores',
    loadChildren: () =>
      import('./views/suppliers/suppliers.module').then(
        (mod) => mod.SuppliersModule
      ),
  },
  { path: '**', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
