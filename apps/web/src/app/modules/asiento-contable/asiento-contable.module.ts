
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AsientoContableListComponent } from './components/asiento-contable-list/asiento-contable-list.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: AsientoContableListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule, CommonModule],
  exports: [RouterModule],
  declarations: [AsientoContableListComponent]
})
export class AsientoContableModule { }
