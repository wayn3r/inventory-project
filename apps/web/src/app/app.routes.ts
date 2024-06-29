import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'transacciones',
    loadChildren: () => import('./modules/transaccion/transaccion.module').then(m => m.TransaccionModule)
  },
  {
    path: '',
    loadComponent: () => import('./common/components').then(m => m.HomeComponent)
  },

];
