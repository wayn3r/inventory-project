import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface Almacen {
  id: number;
  descripcion: string;
  locacion: string;
  estado: 'Activo' | 'Inactivo';
}

@Injectable({
  providedIn: 'root'
})
export class AlmacenService {
  private apiUrl = `${environment.apiUrl}/almacenes`;

  constructor(private http: HttpClient) {}

  getAlmacenes(estado?: string): Observable<Almacen[]> {
    const queryParams = estado ? `?estado=${estado}` : '';
    return this.http.get<Almacen[]>(this.apiUrl + queryParams);
  }

  getAlmacen(id: number): Observable<Almacen> {
    return this.http.get<Almacen>(`${this.apiUrl}/${id}`);
  }

  createAlmacen(almacen: Almacen): Observable<Almacen> {
    return this.http.post<Almacen>(this.apiUrl, almacen);
  }

  updateAlmacen(id: number, almacen: Almacen): Observable<Almacen> {
    return this.http.put<Almacen>(`${this.apiUrl}/${id}`, almacen);
  }

  deleteAlmacen(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
