import { Component, OnInit } from '@angular/core';
import { Transaccion, TransaccionesService } from '../../services/transaccion.service';

@Component({
  selector: 'app-transacciones-list',
  templateUrl: './transacciones-list.component.html',
  styleUrls: ['./transacciones-list.component.css']
})
export class TransaccionesListComponent implements OnInit {
  transacciones: Transaccion[] = [];

  constructor(private transaccionesService: TransaccionesService) { }

  ngOnInit(): void {
    this.loadTransacciones();
  }

  loadTransacciones(): void {
    this.transaccionesService.getTransacciones().subscribe(data => {
      this.transacciones = data;
    });
  }

  deleteTransaccion(id: number): void {
    this.transaccionesService.deleteTransaccion(id).subscribe(() => {
      this.loadTransacciones();
    });
  }
}
