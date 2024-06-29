import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: 'transacciones',
  loadChildren: () => import('./modules/transaccion/transaccion.module').then(m => m.TransaccionModule)
}];
