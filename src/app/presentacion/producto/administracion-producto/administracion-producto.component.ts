import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProductoInteractor } from '../../../infraestructura/producto/interactors/iproduct.interactor';
import { ProductoModel } from '../../../dominio/producto/models/producto.model';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-administracion-producto',
  standalone: true,
  templateUrl: './administracion-producto.component.html',
  styleUrls: ['./administracion-producto.component.scss'],
  imports: [
    CommonModule,
    TableModule,
  ]
})
export class AdministracionProductoComponent implements OnInit {

  productos: ProductoModel[] = [];

  constructor(
    private readonly productoInteractor: IProductoInteractor
  ) { }

  ngOnInit(): void {
    // Aquí puedes inicializar cualquier lógica necesaria al cargar el componente
    this.consultarProductos();
  }

  consultarProductos(): void {
    this.productoInteractor.consultar().subscribe({
      next: (productos) => {
        console.log('Productos consultados:', productos);
        this.productos = productos;
      },
      error: (error) => {
        console.error('Error al consultar productos:', error);
      }
    });
  }

}
