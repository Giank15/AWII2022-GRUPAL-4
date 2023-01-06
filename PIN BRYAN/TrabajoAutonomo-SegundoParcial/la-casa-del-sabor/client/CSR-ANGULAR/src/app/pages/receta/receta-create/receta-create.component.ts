import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/@core/implementation/auth.service';
import { RecetaService } from 'src/app/@core/implementation/receta.service';
import { ScriptUploadService } from 'src/app/@core/implementation/script-upload.service';
import { Receta } from 'src/app/@core/models/receta.models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-receta-create',
  templateUrl: './receta-create.component.html',
  styleUrls: ['./receta-create.component.css']
})
export class RecetaCreateComponent implements OnInit {

  public receta;
  public identity : any;

  constructor(
    private _recetaService : RecetaService,
    private _authService : AuthService,
    private router : Router,
    private _uploadScriptService : ScriptUploadService
  ) {
    this.receta = new Receta('', '', '');
    this.identity = this._authService.getIdentity();
    this._uploadScriptService.Upload(["script"])
  }

  ngOnInit(): void {

    if(this.identity.role == 'ADMIN' || this.identity.role == 'COCINERO'){

    } else {
      this.router.navigate(['']);
    }

  }

  registrarReceta(recetaForm : any){

    if(recetaForm.valid){

      this._recetaService.postReceta({
        nombre: recetaForm.value.nombre,
        nIngredientes: recetaForm.value.nIngredientes,
      }).subscribe(
        response => {
          console.log(response);

          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Receta agregada correctamente!',
            footer: '<p>La Casa Del Sabor</p>',
            showConfirmButton: false,
            timer: 1500
          })
          this.receta = new Receta('', '', '');
          this.router.navigate(['receta'])
        }
      )

    }else{
      Swal.fire({
        icon: 'error',
        title: 'Algo salió mal!',
        text: 'Rellena todos los campos del formulario!',
        footer: '<p>La Casa Del Sabor</p>'
      })
    }

  }

}
