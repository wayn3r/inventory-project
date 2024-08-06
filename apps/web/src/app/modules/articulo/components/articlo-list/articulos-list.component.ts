import { Component, OnInit } from '@angular/core';
import { Articulo as articulos, ArticuloService } from '../../services/articulo.service';

@Component({
  selector: 'app-articulos-list',
  templateUrl: './articulos-list.component.html',
  styleUrls: ['./articulos-list.component.css']
})
export class ArticulosListComponent implements OnInit {
  articulos: articulos[] = [];
  filter = {
    descripcion: '',
    estado: '',
    existencia: undefined,
    costo: undefined
  }

  constructor(private articulosService: ArticuloService) { }

  ngOnInit(): void {
    this.loadArticulos();
  }

  loadArticulos(): void {
    this.articulosService.getArticulos().subscribe(data => {
      this.articulos = data;
    });
  }

  filterArticulos() {
    this.articulosService.getArticulos(this.filter).subscribe(data => {
        this.articulos = data;
    });
  }

  deleteArticulo(id: number): void {
    this.articulosService.deleteArticulo(id).subscribe(() => {
      this.loadArticulos();
    });
  }
}
