import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo, ArticuloService } from '../../services/articulo.service';

@Component({
  selector: 'app-articulo-form',
  templateUrl: './articulo-form.component.html',
  styleUrls: ['./articulo-form.component.css']
})
export class ArticuloFormComponent {
  articulo: Articulo = {
    id: 0,
    descripcion: '',
    existencia: 0,
    tipoInventarioId: 0,
    almacenId: 0,
    costoUnitario: 0,
    estado: 'Activo'
  };

  constructor(
    private articuloService: ArticuloService,
    private router: Router
  ) { }

  save(): void {
    this.articuloService.createArticulo(this.articulo).subscribe(() => {
      this.router.navigate(['/articulos']);
    });
  }
}
