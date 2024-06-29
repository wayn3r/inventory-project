import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Transaccion, TransaccionesService } from '../../services/transaccion.service';

@Component({
  selector: 'app-transaccion-detail',
  templateUrl: './transaccion-detail.component.html',
  styleUrls: ['./transaccion-detail.component.css']
})
export class TransaccionDetailComponent implements OnInit {
  transaccion?: Transaccion;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private transaccionesService: TransaccionesService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.transaccionesService.getTransaccion(id).subscribe(data => {
      this.transaccion = data;
      this.transaccion.fecha = new Date(this.transaccion.fecha).toISOString().split('T')[0];
    });
  }

  save(): void {
    if (!this.transaccion) {
      return;
    }
    this.transaccionesService.updateTransaccion(this.transaccion.id, this.transaccion).subscribe(() => {
      this.router.navigate(['/transacciones']);
    });
  }
}
