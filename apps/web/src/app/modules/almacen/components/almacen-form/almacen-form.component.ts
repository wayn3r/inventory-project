import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {  Almacen,  AlmacenService } from '../../services/almacen.service';

@Component({
  selector: 'app-almacen-form',
  templateUrl: './almacen-form.component.html',
})
export class AlmacenFormComponent {
  almacen: Almacen = { id: 0, descripcion: '', locacion: '', estado: 'Activo' };

  constructor(
    private router: Router,
    private almacenService: AlmacenService
  ) { }

  save(): void {
    this.almacenService.createAlmacen(this.almacen)
      .subscribe(() => this.router.navigate(['/almacenes']));
  }
}
