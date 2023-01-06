import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cocinero } from '../models/cocinero.model';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class CocineroService {

  public url;
  public cocinero;
  public token;

  constructor(

    private _http: HttpClient,
    private _authService: AuthService

  ) {

    this.url = environment.url_mono;
    this.token = _authService.getToken();
    this.cocinero = new Cocinero('', '', 0, '', '', '');

  }

  postCocinero(data:any) : Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + this.token
    });

    return this._http.post(this.url + 'cocinero', data, {headers : headers})
  }

  getCocineros() : Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + this.token
    });

    return this._http.get(this.url + 'cocinero', {headers : headers});
  }

  getCocinero(id:any) : Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + this.token
  });

    return this._http.get(this.url + 'cocinero/' + id, {headers : headers})
  }
  patchCocinero(response:any) : Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + this.token
    });
    return this._http.patch(this.url + 'cocinero/' + response._id, response, {headers : headers})
  }
  removeCocinero(id:any) : Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + this.token
    });

    return this._http.delete(this.url + 'cocinero/' + id, {headers : headers})
  }


}
