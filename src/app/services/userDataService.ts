import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../entities/user';
import { Admin } from '../entities/admin';

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
    baseUrl = 'https://crud-backdotnet.herokuapp.com'
    /**
     *
     */
    constructor(private httpClient : HttpClient) {}

    get() : Observable<HttpResponse<User[]>>
    {
        let a =  this.httpClient.get<User[]>(`${this.baseUrl}/user`,{observe:'response'});
        return a;
    }

    post(user : User) : Observable<HttpResponse<User>>
    {
        let a =  this.httpClient.post<User>(`${this.baseUrl}/user`,user,{observe:'response'});
        return a;
    }

    delete(user : User) : Observable<HttpResponse<User>>
    {
        let a =  this.httpClient.request<User>('delete',`${this.baseUrl}/user`,{body: user,observe:'response'});
        return a;
    }

    update(user : User) : Observable<HttpResponse<User>>
    {
        let a =  this.httpClient.put<User>(`${this.baseUrl}/user`,user,{observe:'response'});
        return a;
    }
    
    postAdmin(admin : Admin, isNew:string) : Observable<HttpResponse<Admin>>
    {
        let params = new HttpParams();
        params.set('isNew',isNew)
        let a =  this.httpClient.post<Admin>(`${this.baseUrl}/admin`,admin,{observe:'response',params});
        return a;
    }
}