import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/@core/implementation/auth.service';
import { Auth } from 'src/app/@core/models/auth.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
public auth: any;
public token : any;
public identity : any;

  constructor(

    private _authService : AuthService,
    private _router : Router,

  ) {

    this.auth = new Auth('', '');
    this.identity = this._authService.getIdentity()
  }

  ngOnInit(): void {
    if(this.identity.role == 'ADMIN' || this.identity.role == 'COCINERO'){
      this._router.navigate(['home'])
    } else {
      this._router.navigate(['']);
    }
  }

  login(loginForm :  any){

    //COMPROBAMOS EL FORMULARIO SEA VÁLIDO
    if(loginForm.valid){

      this._authService.login(this.auth).subscribe(
        response => {

          //ALMACENAMOS EL TOKEN EN EL LOCAL STORAGE DEL NAVEGADOR
          this.token = response.jwt;
          localStorage.setItem('token',response.token);

          this._authService.login(this.auth, true).subscribe(
            response => {
              localStorage.setItem('identity', JSON.stringify(response.user));
              //LO RETORNAMOS A UNA NUEVA VISTA
              this._router.navigate(['home'])
            },
            error => {
              this._router.navigate([''])
            }
          )

        },
        error => {

          Swal.fire({
            icon: 'error',
            title: 'Algo salió mal!',
            text: 'El correo o contraseña son incorrectos',
            footer: '<p>La Casa del Sabor</p>'
          })

        }
      )

    }else{

      Swal.fire({
        icon: 'error',
        title: 'Algo salió mal!',
        text: 'Rellena todos los campos',
        footer: '<p>La Casa del Sabor</p>'
      })

    }

  }

}
