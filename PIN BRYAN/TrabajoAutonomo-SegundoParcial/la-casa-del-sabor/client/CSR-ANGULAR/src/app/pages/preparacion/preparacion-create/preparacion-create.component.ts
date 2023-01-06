import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/@core/implementation/auth.service';
import { CocineroService } from 'src/app/@core/implementation/cocinero.service';
import { PreparacionService } from 'src/app/@core/implementation/preparacion.service';
import { RecetaService } from 'src/app/@core/implementation/receta.service';
import { ScriptUploadService } from 'src/app/@core/implementation/script-upload.service';
import { Preparacion } from 'src/app/@core/models/preparacion.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-preparacion-create',
  templateUrl: './preparacion-create.component.html',
  styleUrls: ['./preparacion-create.component.css']
})
export class PreparacionCreateComponent implements OnInit {

  public preparacion;
  public cocineros : any;
  public recetas : any;
  public recetasEsp : any;
  public identity : any;

  constructor(
    private _preparacionService : PreparacionService,
    private _cocineroService : CocineroService,
    private _recetaService : RecetaService,
    private router : Router,
    private _authService : AuthService,
    private _uploadScriptService : ScriptUploadService
  ) {
    this.preparacion = new Preparacion('', '', '', 0, 0, '', '', '');
    this.identity = this._authService.getIdentity();
    this._uploadScriptService.Upload(["script"])
   }

  ngOnInit(): void {
    if(this.identity.role == 'ADMIN' || this.identity.role == 'COCINERO'){

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



    } else {
      this.router.navigate(['']);
    }
  }

  onSubmit(preparacionForm : any) {

    if(preparacionForm.valid){

      this._preparacionService.postPreparacion({
        fecha : preparacionForm.value.fecha,
        hora : preparacionForm.value.hora,
        cantidad : preparacionForm.value.cantidad,
        costo : preparacionForm.value.costo,
        tiempoEst : preparacionForm.value.tiempoEst,
        idCocinero : preparacionForm.value.idCocinero,
        idReceta : preparacionForm.value.idReceta

      }).subscribe(
        response => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Pedido registrado correctamente!',
            footer: '<p>La Casa Del Sabor</p>',
            showConfirmButton: false,
            timer: 1500
          })
          this.preparacion = new Preparacion('', '', '', 0, 0, '', '', '');
          this.router.navigate(['preparacion'])
        }
      )

    } else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Rellena todos los campos del formulario!',
        footer: '<p>La Casa Del Sabor</p>',
        showConfirmButton: false,
        timer: 1500
      })
    }

  }

}
