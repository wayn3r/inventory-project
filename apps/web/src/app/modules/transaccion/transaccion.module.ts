import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TransaccionesService } from './services/transaccion.service';
import { TransaccionesListComponent } from './components/transacciones-list/transacciones-list.component';
import { TransaccionFormComponent } from './components/transaccion-form/transaccion-form.component';
import { TransaccionDetailComponent } from './components/transaccion-detail/transaccion-detail.component';
import { CommonModule } from '@angular/common';


const appRoutes: Routes = [
  { path: '', component: TransaccionesListComponent },
  { path: 'new', component: TransaccionFormComponent },
  { path: ':id', component: TransaccionDetailComponent },
];

@NgModule({
  declarations: [
    TransaccionesListComponent,
    TransaccionDetailComponent,
    TransaccionFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(appRoutes)
  ],
  providers: [TransaccionesService],
})
export class TransaccionModule { }
