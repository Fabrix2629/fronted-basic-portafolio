import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoProducto } from '../interfaces/info-productos.interface';
@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  cargando = true;
  infoProductos: InfoProducto[] = [];
  constructor(private readonly http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos(): void {
    this.http
      .get<InfoProducto[]>(
        'https://angular-portafolio-html-8d5c8-default-rtdb.firebaseio.com/productos_idx/.json'
      )
      .subscribe((resp) => {
        this.infoProductos = resp;
        setTimeout(() => {
          this.cargando = false;
        }, 2000);
      });
  }
}
