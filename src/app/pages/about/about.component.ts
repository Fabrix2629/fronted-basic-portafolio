import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { InfoEquipo } from '../../interfaces/info-equipo.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  equipo: any[] = [];
  constructor(public _infoPaginaService: InfoPaginaService) {}

  ngOnInit(): void {
    this.equipo = this._infoPaginaService.equipo;
  }
}
