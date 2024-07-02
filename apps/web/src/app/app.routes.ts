import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'transacciones',
    loadChildren: () => import('./modules/transaccion/transaccion.module').then(m => m.TransaccionModule)
  },
  {
    path: 'articulos',
    loadChildren: () => import('./modules/articulo/articulo.module').then(m => m.ArticuloModule)
  },
  {
    path: 'tipos-inventario',
    loadChildren: () => import('./modules/tipos-inventario/tipo-inventario.module').then(m => m.TipoInventarioModule)
  },
  {
    path: 'almacenes',
    loadChildren: () => import('./modules/almacen/almacen.module').then(m => m.AlmacenModule)
  },
  {
    path: '',
    loadComponent: () => import('./common/components').then(m => m.HomeComponent)
  },

];
