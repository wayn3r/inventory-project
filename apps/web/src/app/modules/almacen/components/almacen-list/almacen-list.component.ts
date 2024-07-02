import { Component, OnInit } from '@angular/core';
import { AlmacenService, Almacen } from '../../services/almacen.service';

@Component({
  selector: 'app-almacenes-list',
  templateUrl: './almacenes-list.component.html',
})
export class AlmacenListComponent implements OnInit {
  almacenes: Almacen[] = [];

  constructor(private almacenService: AlmacenService) { }

  ngOnInit(): void {
    this.loadAlmacenes();
  }

  loadAlmacenes(): void {
    this.almacenService.getAlmacenes().subscribe(data => {
      this.almacenes = data;
    });
  }

  deleteAlmacen(id: number): void {
    this.almacenService.deleteAlmacen(id).subscribe(() => {
      this.loadAlmacenes();
    });
  }
}
