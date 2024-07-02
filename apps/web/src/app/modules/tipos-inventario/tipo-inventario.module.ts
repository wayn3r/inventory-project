import { NgModule } from "@angular/core";
import { TipoInventarioDetailComponent } from "./components/tipo-inventario-detail/tipo-inventario-detail.component";
import { TipoInventarioFormComponent } from "./components/tipo-inventario-form/tipo-inventario-form.component";
import { TiposInventarioListComponent } from "./components/tipos-inventario-list/tipos-inventario-list.component";
import { TipoInventarioService } from "./services/tipo-inventario.service";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
    { path: '', component: TiposInventarioListComponent },
    { path: 'new', component: TipoInventarioFormComponent },
    { path: ':id', component: TipoInventarioDetailComponent },
  ];

  
@NgModule({
    declarations: [
        TipoInventarioDetailComponent,
        TipoInventarioFormComponent,
        TiposInventarioListComponent
    ],
    imports: [FormsModule, CommonModule, RouterModule.forChild(appRoutes)],
    providers: [TipoInventarioService]
})
export class TipoInventarioModule { }