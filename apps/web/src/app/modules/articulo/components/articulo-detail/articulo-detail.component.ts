import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articulo, ArticuloService } from '../../services/articulo.service';

@Component({
  selector: 'app-articulo-detail',
  templateUrl: './articulo-detail.component.html',
  styleUrls: ['./articulo-detail.component.css']
})
export class ArticuloDetailComponent implements OnInit {
  articulo?: Articulo;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articuloService: ArticuloService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.articuloService.getArticulo(id).subscribe(data => {
      this.articulo = data;
    });
  }

  save(): void {
    if (!this.articulo) {
      return;
    }
    this.articuloService.updateArticulo(this.articulo.id, this.articulo).subscribe(() => {
      this.router.navigate(['/articulos']);
    });
  }
}
