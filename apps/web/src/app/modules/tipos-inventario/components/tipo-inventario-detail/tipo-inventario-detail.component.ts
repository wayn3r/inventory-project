import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoInventario, TipoInventarioService } from '../../services/tipo-inventario.service';

@Component({
  selector: 'app-tipo-inventario-detail',
  templateUrl: './tipo-inventario-detail.component.html',
})
export class TipoInventarioDetailComponent implements OnInit {
  tipoInventario: TipoInventario = { id: 0, descripcion: '', cuentaContable: '', estado: 'Activo' };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tipoInventarioService: TipoInventarioService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.tipoInventarioService.getTipoInventario(id).subscribe(data => {
      this.tipoInventario = data;
    });
  }

  save(): void {
    this.tipoInventarioService.updateTipoInventario(this.tipoInventario.id, this.tipoInventario)
      .subscribe(() => this.router.navigate(['/tipos-inventario']));
  }
}
