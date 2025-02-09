import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoProducto } from '../interfaces/info-productos.interface';
@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  cargando = true;
  infoProductos: InfoProducto[] = [];
  productosFiltrado: InfoProducto[] = [];

  constructor(private readonly http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.http
        .get<InfoProducto[]>(
          'https://angular-portafolio-html-8d5c8-default-rtdb.firebaseio.com/productos_idx/.json'
        )
        .subscribe((resp: InfoProducto[]) => {
          this.infoProductos = resp;
          this.cargando = false;
          resolve();
        });
    });
  }

  getProducto(id: string): any {
    return this.http.get(
      `https://angular-portafolio-html-8d5c8-default-rtdb.firebaseio.com/productos/${id}.json`
    );
  }

  buscarProducto(termino: string): void {
    if (this.infoProductos.length === 0) {
      this.cargarProductos().then(() => {
        this.filtrarProductos(termino);
      });
    } else {
      this.filtrarProductos(termino);
    }
  }

  private filtrarProductos(termino: string) {
    console.log(this.infoProductos);
    this.productosFiltrado = [];
    termino = termino.toLocaleLowerCase();

    this.infoProductos.forEach((prod) => {
      const tituloLower = prod.titulo ? prod.titulo.toLocaleLowerCase() : '';
      if (
        (prod.categoria && prod.categoria.indexOf(termino) >= 0) ||
        tituloLower.indexOf(termino) >= 0
      ) {
        this.productosFiltrado.push(prod);
      }
    });
  }
}
