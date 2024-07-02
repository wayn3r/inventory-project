import { NgModule } from "@angular/core";
import { AlmacenDetailComponent } from "./components/almacen-detail/almacen-detail.component";
import { AlmacenFormComponent } from "./components/almacen-form/almacen-form.component";
import { AlmacenListComponent } from "./components/almacen-list/almacen-list.component";
import { AlmacenService } from "./services/almacen.service";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
    { path: '', component: AlmacenListComponent },
    { path: 'new', component: AlmacenFormComponent },
    { path: ':id', component: AlmacenDetailComponent },
  ];

  
@NgModule({
    declarations: [
        AlmacenDetailComponent,
        AlmacenFormComponent,
        AlmacenListComponent
    ],
    imports: [FormsModule, CommonModule, RouterModule.forChild(appRoutes)],
    providers: [AlmacenService]
})
export class AlmacenModule { }