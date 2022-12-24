import { Component } from '@angular/core';

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  busqueda: string = '';
  errorMessage: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar(busqueda: string) {
    this.errorMessage = false;
    console.log(this.busqueda);

    this.paisService.buscarCapital(busqueda)
      .subscribe({
        next: paises => {
          console.log(paises)
          this.paises = paises;

        },
        error: (err) => {
          this.errorMessage = true;
          this.paises = [];
        }
      });

  }

  sugerencias(busqueda: string) {
    this.errorMessage = false;
  }

}
