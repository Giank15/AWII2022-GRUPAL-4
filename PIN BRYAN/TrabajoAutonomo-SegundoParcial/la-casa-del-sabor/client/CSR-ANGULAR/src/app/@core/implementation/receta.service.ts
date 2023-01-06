import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Receta } from '../models/receta.models';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  public url;
  public receta;
  public token;

  constructor(
    private _http: HttpClient,
    private _authService: AuthService
  ) {
    this.url = environment.url_micro;
    this.token = _authService.getToken();
    this.receta = new Receta('', '', '');
  }

  postReceta(data:any) : Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + this.token
    });

    return this._http.post(this.url + 'receta/registrar', data, {headers : headers})
  }

  getRecetas() : Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + this.token
    });

    return this._http.get(this.url + 'receta/lista', {headers : headers})
  }

  getReceta(id:any) : Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + this.token
    });

    return this._http.get(this.url + 'receta/ver/' + id, {headers : headers})
  }

  patchRecetas(data : any) : Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + this.token
    });

    return this._http.patch(this.url + 'recetaUpdate/' + data._id, data, {headers : headers})
  }

  removeRecetas(id : any) : Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + this.token
    });

    return this._http.delete(this.url + 'recetaRemove/' + id, {headers : headers})
  }

}
