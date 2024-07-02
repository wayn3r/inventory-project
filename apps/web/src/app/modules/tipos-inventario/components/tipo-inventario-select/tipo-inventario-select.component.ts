import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TipoInventario, TipoInventarioService } from '../../services/tipo-inventario.service';

@Component({
    selector: 'app-tipo-inventario-select',
    standalone: true,
    imports: [CommonModule, FormsModule],
    providers: [],
    templateUrl: './tipo-inventario-select.component.html',
})
export class TipoInventarioSelectComponent {

    @Input() value?: number;
    @Output() valueChange = new EventEmitter<number>();
    @Input() filtrarEstado?: string

    tiposInventario: TipoInventario[] = [];

    constructor(
        private tipoInventarioService: TipoInventarioService
    ) { }

    ngOnInit(): void {
        this.tipoInventarioService.getTiposInventario(this.filtrarEstado).subscribe(data => {
            this.tiposInventario = data;
        });
    }

    onChange(event: Event): void {
        const target = event.target as HTMLSelectElement;
        this.valueChange.emit(Number(target.value));
    }
}
