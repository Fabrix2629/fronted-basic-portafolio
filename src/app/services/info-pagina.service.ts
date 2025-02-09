import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { InfoEquipo } from '../interfaces/info-equipo.interface';

@Injectable({
  providedIn: 'root',
})
export class InfoPaginaService {
  info: InfoPagina = {};
  equipo: InfoEquipo[] = [];
  cargada = false;

  constructor(private readonly http: HttpClient) {
    this.cargarInfoPagina();
    this.cargarEquipo();
  }

  private cargarInfoPagina() {
    this.http
      .get('assets/data/data-pagination.json')
      .subscribe((resp: InfoPagina) => {
        this.cargada = false;
        this.info = resp;
      });
  }

  private cargarEquipo() {
    this.http
      .get<InfoEquipo[]>(
        'https://angular-portafolio-html-8d5c8-default-rtdb.firebaseio.com/equipo/.json'
      )
      .subscribe((resp) => {
        this.cargada = false;
        this.equipo = resp;
      });
  }
}
