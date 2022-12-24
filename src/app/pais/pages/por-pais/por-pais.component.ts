import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li {
      cursor: pointer;
    }
    `
  ]
})
export class PorPaisComponent {

  busqueda: string = '';
  errorMessage: boolean = false;
  paises: Country[] = [];

  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) { }

  buscar(busqueda: string) {
    this.mostrarSugerencias = false;
    this.errorMessage = false;
    console.log(this.busqueda);

    this.paisService.buscarPais(busqueda)
      .subscribe({
        next: paises => this.paises = paises,
        error: (err) => {
          this.errorMessage = true;
          this.paises = [];
        }
      });

  }

  sugerencias(busqueda: string) {
    this.errorMessage = false;
    this.mostrarSugerencias = true;
    this.busqueda = busqueda;
    this.paisService.buscarPais(busqueda)
      .subscribe({
        next: paises => this.paisesSugeridos = paises.splice(0, 5),
        error: error => this.paisesSugeridos = []
      });
  }


  buscarSugerido(busqueda: string) {
    this.buscar(busqueda)
  }

}
