import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Almacen, AlmacenService } from '../../services/almacen.service';

@Component({
    selector: 'app-almacen-select',
    standalone: true,
    imports: [CommonModule, FormsModule],
    providers: [],
    templateUrl: './almacen-select.component.html',
})
export class AlmacenSelectComponent {

    @Input() value?: number;
    @Output() valueChange = new EventEmitter<number>();
    @Input() filtrarEstado?: string

    almacenes: Almacen[] = [];

    constructor(
        private almacenService: AlmacenService
    ) { }

    ngOnInit(): void {
        this.almacenService.getAlmacenes(this.filtrarEstado).subscribe(data => {
            this.almacenes = data;
        });
    }

    onChange(event: Event): void {
        const target = event.target as HTMLSelectElement;
        this.valueChange.emit(Number(target.value));
    }
}
