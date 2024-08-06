import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface Articulo {
  id: number;
  descripcion: string;
  existencia: number;
  tipoInventarioId: number;
  almacenId: number;
  costoUnitario: number;
  estado: string
}

type Filter = {
    estado?: string;
    existencia?: number;
    descripcion?: string;
  };

@Injectable({ providedIn: 'root' })
export class ArticuloService {
  private apiUrl = `${environment.apiUrl}/articulos`;

  constructor(private http: HttpClient) { }

  getArticulos(filter?: Filter): Observable<Articulo[]> {
    return this.http.get<Articulo[]>(this.apiUrl, { params: filter });
  }


  getArticulo(id: number): Observable<Articulo> {
    return this.http.get<Articulo>(`${this.apiUrl}/${id}`);
  }

  createArticulo(articulo: Articulo): Observable<Articulo> {
    return this.http.post<Articulo>(this.apiUrl, articulo);
  }

  updateArticulo(id: number, articulo: Articulo): Observable<Articulo> {
    return this.http.put<Articulo>(`${this.apiUrl}/${id}`, articulo);
  }

  deleteArticulo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}