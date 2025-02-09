import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/info-producto-description.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class ItemComponent implements OnInit {
  producto: ProductoDescripcion | undefined;
  id: string | undefined;
  constructor(
    private route: ActivatedRoute,
    public _productosService: ProductosService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((parametros) => {
      this._productosService
        .getProducto(parametros['id'])
        .subscribe((producto: ProductoDescripcion) => {
          this.id = parametros['id'];
          this.producto = producto;
        });
    });
  }
}
