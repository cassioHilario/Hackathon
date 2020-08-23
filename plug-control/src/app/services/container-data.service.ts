import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { GlobalDataService } from './global-data.service';
import { ContainerData } from '../models/container-data.model';
import { throwError, Observable, pipe } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
//Updates das tabelas do container
export class ContainerDataService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(
    private httpClient: HttpClient,
    private global: GlobalDataService
    ) { }

    url = `${this.global.API_BASE_URL}/container`;

  getAll(): Observable<ContainerData[]>{
    return this.httpClient.get<ContainerData[]>(this.url)
  }

  getById(cod_iso: string): Observable<ContainerData>{
    return this.httpClient.get<ContainerData>(`${this.url}/${cod_iso}`)
    .pipe(catchError(this.handleError));
  }

  post(container: ContainerData): Observable<ContainerData>{
    return this.httpClient.post<ContainerData>(this.url, JSON.stringify(container), this.httpOptions)
    .pipe(catchError(this.handleError));
  }

  put(container: ContainerData): Observable<ContainerData>{
    return this.httpClient.put<ContainerData>(`${this.url}/${container.cod_iso}`, JSON.stringify(container))
    .pipe(catchError(this.handleError));
  }

  delete(container: ContainerData): Observable<ContainerData>{
    return this.httpClient.delete<ContainerData>(`${this.url}/${container.cod_iso}`)
    .pipe(catchError(this.handleError));
  }
  
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}