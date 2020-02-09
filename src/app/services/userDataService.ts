import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../entities/user';

const httpOptions = 
{
    headers: new HttpHeaders(
    {
      'Content-Type':  'application/json',
      'Authorization': 'jwt-token'
    })
};
  

@Injectable({
    providedIn: 'root'
})

export class UserDataService
{
    baseUrl = 'https://localhost:5001'
    /**
     *
     */
    constructor(private httpClient : HttpClient) {}

    get() : Observable<HttpResponse<User[]>>
    {
        let a =  this.httpClient.get<User[]>(`${this.baseUrl}/user`,{observe:'response'});
        return a;
    }
    
}