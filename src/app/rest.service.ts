import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Comic } from './comic';

@Injectable(
  {
  providedIn: 'root'
})

export class RestService
{
  constructor(private http: HttpClient) { }
  private readonly APIMarvel = 'http://localhost:3000/curso';

  list()
  {
    return this.http.get<Comic[]>(this.APIMarvel);
  }
 
}
