import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TipoInventario, TipoInventarioService } from '../../services/tipo-inventario.service';

@Component({
  selector: 'app-tipo-inventario-form',
  templateUrl: './tipo-inventario-form.component.html',
})
export class TipoInventarioFormComponent {
  tipoInventario: TipoInventario = { id: 0, descripcion: '', cuentaContable: '', estado: 'Activo' };

  constructor(
    private router: Router,
    private tipoInventarioService: TipoInventarioService
  ) { }

  save(): void {
    this.tipoInventarioService.createTipoInventario(this.tipoInventario)
      .subscribe(() => this.router.navigate(['/tipos-inventario']));
  }
}
