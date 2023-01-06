import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/@core/implementation/auth.service';
import { CocineroService } from 'src/app/@core/implementation/cocinero.service';
import { ScriptUploadService } from 'src/app/@core/implementation/script-upload.service';
import { Cocinero } from 'src/app/@core/models/cocinero.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cocinero-edit',
  templateUrl: './cocinero-edit.component.html',
  styleUrls: ['./cocinero-edit.component.css']
})
export class CocineroEditComponent implements OnInit {

  public id : any;
  public cocinero : any;
  public passwordSinEncriptar : any;
  public identity : any;

  constructor(
    private _route : ActivatedRoute,
    private _cocineroService : CocineroService,
    private _authService : AuthService,
    private router : Router,
    private _uploadScriptService : ScriptUploadService
  ) {
    this.identity = this._authService.getIdentity()
    this._uploadScriptService.Upload(["script"])
  }

  ngOnInit(): void {

    if(this.identity.role == 'ADMIN'){

      this._route.params.subscribe(params => {
        this.id = params['id'];

        this._cocineroService.getCocinero(this.id).subscribe(
          response => {
            this.cocinero = response;
          }
        )
      })

    } else {
      this.router.navigate(['']);
    }



  }

  actualizar(cocineroForm:any){
    if(cocineroForm.valid){

      this._cocineroService.patchCocinero({
        _id : this.id,
        password: cocineroForm.value.password,
        name: cocineroForm.value.name,
        sueldo: cocineroForm.value.sueldo,
        email: cocineroForm.value.email,
        role: cocineroForm.value.role
      }).subscribe(
        response => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Cocinero registrado correctamente!',
            footer: '<p>La Casa del Sabor</p>',
            showConfirmButton: false,
            timer: 1500
          })
          this.cocinero = new Cocinero('', '', 0, '', '', '');
          this.router.navigate(['cocinero'])
        }
      )
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Algo salió mal!',
        text: 'Rellena todos los campos del formulario!',
        footer: '<p>La Casa del Sabor</p>',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

}
