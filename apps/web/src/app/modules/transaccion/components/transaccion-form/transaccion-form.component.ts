import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Transaccion, TransaccionesService } from '../../services/transaccion.service';

@Component({
  selector: 'app-transaccion-form',
  templateUrl: './transaccion-form.component.html',
  styleUrls: ['./transaccion-form.component.css']
})
export class TransaccionFormComponent {
  transaccion: Transaccion = {
    id: 0,
    tipoTransaccion: '',
    articuloId: 0,
    fecha: new Date().toISOString().split('T')[0],
    cantidad: 0,
    monto: 0
  };

  constructor(
    private transaccionesService: TransaccionesService,
    private router: Router
  ) {}

  save(): void {
    this.transaccionesService.createTransaccion(this.transaccion).subscribe(() => {
      this.router.navigate(['/transacciones']);
    });
  }
}
