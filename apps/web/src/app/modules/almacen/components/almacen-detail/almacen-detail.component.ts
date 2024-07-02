import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Almacen, AlmacenService } from '../../services/almacen.service';

@Component({
  selector: 'app-almacen-detail',
  templateUrl: './almacen-detail.component.html',
})
export class AlmacenDetailComponent implements OnInit {
  almacen: Almacen = { id: 0, descripcion: '', locacion: '', estado: 'Activo' };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private almacenService: AlmacenService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.almacenService.getAlmacen(id).subscribe(data => {
      this.almacen = data;
    });
  }

  save(): void {
    this.almacenService.updateAlmacen(this.almacen.id, this.almacen)
      .subscribe(() => this.router.navigate(['/almacenes']));
  }
}
