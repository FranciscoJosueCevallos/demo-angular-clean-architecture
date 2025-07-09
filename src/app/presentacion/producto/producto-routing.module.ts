import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministracionProductoComponent } from './administracion-producto/administracion-producto.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'administracion',
    pathMatch: 'full'
  },
  {
    path: 'administracion',
    component: AdministracionProductoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
