import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root',
})
export class InfoPaginaService {
  info: InfoPagina = {};
  cargada = false;

  constructor(private readonly http: HttpClient) {
    this.cargarInfoPagina();
  }

  private cargarInfoPagina(): void {
    this.http.get<InfoPagina>('assets/data/data-pagination.json').subscribe({
      next: (resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
        console.log(resp.email);
      },
      error: (err) => {
        console.error('Error al cargar la información de la página', err);
      },
    });
  }
}
