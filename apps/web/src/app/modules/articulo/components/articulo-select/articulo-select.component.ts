import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Articulo, ArticuloService } from '../../services/articulo.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-articulo-select',
    standalone: true,
    imports: [CommonModule, FormsModule],
    providers: [],
    templateUrl: './articulo-select.component.html',
    styleUrl: './articulo-select.component.css'
})
export class ArticuloSelectComponent {

    @Input() value?: number;
    @Output() valueChange = new EventEmitter<number>();
    @Input() filtrarEstado?: string

    articulos: Articulo[] = [];

    constructor(
        private articuloService: ArticuloService
    ) { }

    ngOnInit(): void {
        this.articuloService.getArticulos({ estado: this.filtrarEstado}).subscribe(data => {
            this.articulos = data;
        });
    }

    onChange(event: Event): void {
        const target = event.target as HTMLSelectElement;
        this.valueChange.emit(Number(target.value));
    }
}
