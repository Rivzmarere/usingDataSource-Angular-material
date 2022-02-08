import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient,) { }

  getAllProducts() {
    return this.http.get(
      `https://fakestoreapi.com/users`);}

}
