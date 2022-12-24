import { Component } from '@angular/core';

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-continente',
  templateUrl: './por-continente.component.html',
  styles: [
  ]
})
export class PorContinenteComponent {

  continentes: string[] = ['eu', 'efta', 'caricom', 'pa', 'au', 'usan', 'eeu', 'al', 'asean', 'cais', 'cefta', 'nafta', 'saarc'];
  continenteActivo: string = '';
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  activarContinente(continente: string) {
    this.continenteActivo = continente;
    console.log(continente);

  }

  getClassCSS(continente: string): string {
    return continente === this.continenteActivo
      ? 'btn btn-outline-primary active'
      : 'btn btn-outline-primary'
  }

  buscar(busqueda: string) {
    this.activarContinente(busqueda)
    console.log(busqueda);

    this.paisService.buscarContinente(busqueda)
      .subscribe({
        next: paises => {
          console.log(paises)
          this.paises = paises;

        },
        error: (err) => {
          this.paises = [];
        }
      });

  }

}
