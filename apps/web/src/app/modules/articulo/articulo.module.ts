import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ArticuloService } from './services/articulo.service';
import { ArticulosListComponent } from './components/articlo-list/articulos-list.component';
import { ArticuloFormComponent } from './components/articulo-form/articulo-form.component';
import { ArticuloDetailComponent } from './components/articulo-detail/articulo-detail.component';
import { CommonModule } from '@angular/common';
import { ArticuloSelectComponent } from './components/articulo-select/articulo-select.component';
import { TipoInventarioSelectComponent } from '../tipos-inventario/components/tipo-inventario-select/tipo-inventario-select.component';
import { AlmacenSelectComponent } from '../almacen/components/almacen-select/almacen-select.component';


const appRoutes: Routes = [
    { path: '', component: ArticulosListComponent },
    { path: 'new', component: ArticuloFormComponent },
    { path: ':id', component: ArticuloDetailComponent },
];

@NgModule({
    declarations: [
        ArticulosListComponent,
        ArticuloDetailComponent,
        ArticuloFormComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        ArticuloSelectComponent,
        TipoInventarioSelectComponent,
        AlmacenSelectComponent,
        FormsModule,
        RouterModule.forChild(appRoutes)
    ],
    providers: [ArticuloService],
})
export class ArticuloModule { }
