import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/@core/implementation/auth.service';
import { RecetaService } from 'src/app/@core/implementation/receta.service';
import { ScriptUploadService } from 'src/app/@core/implementation/script-upload.service';
import { Receta } from 'src/app/@core/models/receta.models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-receta-edit',
  templateUrl: './receta-edit.component.html',
  styleUrls: ['./receta-edit.component.css']
})
export class RecetaEditComponent implements OnInit {

  public id : any;
  public receta : any;
  public identity : any;

  constructor(

    private _route : ActivatedRoute,
    private _recetaService : RecetaService,
    private _authService : AuthService,
    private router : Router,
    private _uploadScriptService : ScriptUploadService

  ) {
    this.identity = this._authService.getIdentity();
    this._uploadScriptService.Upload(["script"])
  }

  ngOnInit(): void {

    if(this.identity.role == 'ADMIN' || this.identity.role == 'COCINERO'){
      this._route.params.subscribe(params => {
        this.id = params['id'];

        this._recetaService.getReceta(this.id).subscribe(
          response => {
            this.receta = response.receta
          }
        )
      })
    } else {
      this.router.navigate(['']);
    }


  }

  updateReceta(recetaForm : any){
    if(recetaForm.valid) {

      this._recetaService.patchRecetas({
        _id : this.id,
        nombre: recetaForm.value.nombre,
        nIngredientes : recetaForm.value.nIngredientes
      }).subscribe(
        response => {
          console.log(response);

          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Receta actualizada correctamente!',
            footer: '<p>La Casa del Sabor</p>',
            showConfirmButton: false,
            timer: 1500
          })
          this.receta = new Receta('', '', '')
          this.router.navigate(['receta'])
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
