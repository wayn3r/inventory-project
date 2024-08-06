import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface Transaccion {
  id: number;
  tipoTransaccion: string;
  articuloId: number;
  fecha: Date | string;
  cantidad: number;
  monto: number;
  asientoContable?: string | null
}

@Injectable({
  providedIn: 'root'
})
export class TransaccionesService {
  private apiUrl = `${environment.apiUrl}/transacciones`;

  constructor(private http: HttpClient) {}

  generateAsiento(filter: Record<string, any>): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/generate-asiento`, { filter });
  }
  
  getTransacciones(filter: Record<string, any> = {}): Observable<Transaccion[]> {
    return this.http.get<Transaccion[]>(this.apiUrl, { params: filter});
  }

  getTransaccion(id: number): Observable<Transaccion> {
    return this.http.get<Transaccion>(`${this.apiUrl}/${id}`);
  }

  createTransaccion(transaccion: Transaccion): Observable<Transaccion> {
    return this.http.post<Transaccion>(this.apiUrl, transaccion);
  }

  updateTransaccion(id: number, transaccion: Transaccion): Observable<Transaccion> {
    return this.http.put<Transaccion>(`${this.apiUrl}/${id}`, transaccion);
  }

  deleteTransaccion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}