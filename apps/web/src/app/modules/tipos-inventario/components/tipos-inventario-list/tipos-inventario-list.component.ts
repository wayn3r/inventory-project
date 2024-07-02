import { Component, OnInit } from '@angular/core';
import { TipoInventarioService, TipoInventario } from '../../services/tipo-inventario.service';

@Component({
  selector: 'app-tipos-inventario-list',
  templateUrl: './tipos-inventario-list.component.html',
})
export class TiposInventarioListComponent implements OnInit {
  tiposInventario: TipoInventario[] = [];

  constructor(private tipoInventarioService: TipoInventarioService) { }

  ngOnInit(): void {
    this.loadTiposInventario();
  }

  loadTiposInventario(): void {
    this.tipoInventarioService.getTiposInventario().subscribe(data => {
      this.tiposInventario = data;
    });
  }

  deleteTipoInventario(id: number): void {
    this.tipoInventarioService.deleteTipoInventario(id).subscribe(() => {
      this.loadTiposInventario();
    });
  }
}
