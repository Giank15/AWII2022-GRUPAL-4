import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/@core/implementation/auth.service';
import { CocineroService } from 'src/app/@core/implementation/cocinero.service';
import { PreparacionService } from 'src/app/@core/implementation/preparacion.service';
import { RecetaService } from 'src/app/@core/implementation/receta.service';
import { ScriptUploadService } from 'src/app/@core/implementation/script-upload.service';
import { Preparacion } from 'src/app/@core/models/preparacion.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-preparacion-edit',
  templateUrl: './preparacion-edit.component.html',
  styleUrls: ['./preparacion-edit.component.css']
})
export class PreparacionEditComponent implements OnInit {

  public id : any;
  public preparacion : any;
  public cocineros : any;
  public recetas : any;
  public identity : any;

  constructor(
    private _route : ActivatedRoute,
    private _preparacionService : PreparacionService,
    private _cocineroService : CocineroService,
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

        this._preparacionService.getPreparacion(this.id).subscribe(
          response => {
            this.preparacion = response
          }
        )

        this._cocineroService.getCocineros().subscribe(
          response => {
            this.cocineros = response
          }
        )

        this._recetaService.getRecetas().subscribe(
          response => {
            this.recetas = response.receta
          }
        )

      })
    } else {
      this.router.navigate(['']);
    }
  }

  updatePreparacion(preparacionForm : any){
    if(preparacionForm.valid) {

      this._preparacionService.patchPreparacion({
        _id : this.id,
        fecha: preparacionForm.value.fecha,
        hora : preparacionForm.value.hora,
        cantidad : preparacionForm.value.cantidad,
        costo : preparacionForm.value.costo,
        tiempoEst : preparacionForm.value.tiempoEst,
        idCocinero : preparacionForm.value.idCocinero,
        idReceta : preparacionForm.value.idReceta
      }).subscribe(
        response => {
          console.log(response);

          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Pedido actualizado correctamente!',
            footer: '<p>La Casa del Sabor</p>',
            showConfirmButton: false,
            timer: 1500
          })
          this.preparacion = new Preparacion('', '', '', 0, 0, '', '', '')
          this.router.navigate(['preparacion'])
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
