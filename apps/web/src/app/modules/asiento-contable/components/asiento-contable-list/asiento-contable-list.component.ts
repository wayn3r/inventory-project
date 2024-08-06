import { Component, OnInit } from '@angular/core';
import { Transaccion, TransaccionesService } from '../../../transaccion/services/transaccion.service';

@Component({
  selector: 'app-asiento-contable-list',
  templateUrl: './asiento-contable-list.component.html',
  styleUrls: ['./asiento-contable-list.component.css']
})
export class AsientoContableListComponent implements OnInit {
  transacciones: Transaccion[] = [];
  filter = {    from: '',    to: '', noAsiento: false  }

  constructor(private transaccionesService: TransaccionesService) { }

  ngOnInit(): void {
    this.loadTransacciones();
  }

  loadTransacciones(): void {
    this.transaccionesService.getTransacciones().subscribe(data => {
      this.transacciones = data;
    });
  }

  filterTransactions() {
    this.transaccionesService.getTransacciones(this.filter).subscribe(data => {
        this.transacciones = data;
    });
  }

  deleteTransaccion(id: number): void {
    this.transaccionesService.deleteTransaccion(id).subscribe(() => {
      this.loadTransacciones();
    });
  }

  generateAsiento() {
    if(!this.filter.noAsiento || !this.transacciones.length) return;

    this.transaccionesService.generateAsiento(this.filter).subscribe(() => {
        this.filterTransactions();
    });
  }
}
