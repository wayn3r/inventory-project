import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

export interface TipoInventario {
  id: number;
  descripcion: string;
  cuentaContable: string;
  estado: 'Activo' | 'Inactivo';
}

@Injectable({
  providedIn: 'root'
})
export class TipoInventarioService {
  private apiUrl = `${environment.apiUrl}/tipos-inventario`;

  constructor(private http: HttpClient) {}

  getTiposInventario(estado?: string): Observable<TipoInventario[]> {
    const queryParams = estado ? `?estado=${estado}` : '';
    return this.http.get<TipoInventario[]>(this.apiUrl + queryParams);
  }

  getTipoInventario(id: number): Observable<TipoInventario> {
    return this.http.get<TipoInventario>(`${this.apiUrl}/${id}`);
  }

  createTipoInventario(tipoInventario: TipoInventario): Observable<TipoInventario> {
    return this.http.post<TipoInventario>(this.apiUrl, tipoInventario);
  }

  updateTipoInventario(id: number, tipoInventario: TipoInventario): Observable<TipoInventario> {
    return this.http.put<TipoInventario>(`${this.apiUrl}/${id}`, tipoInventario);
  }

  deleteTipoInventario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
