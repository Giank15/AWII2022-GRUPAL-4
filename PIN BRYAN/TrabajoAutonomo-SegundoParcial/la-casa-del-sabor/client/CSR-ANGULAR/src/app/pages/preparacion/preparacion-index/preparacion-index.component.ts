import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/@core/implementation/auth.service';
import { CocineroService } from 'src/app/@core/implementation/cocinero.service';
import { PreparacionService } from 'src/app/@core/implementation/preparacion.service';
import { RecetaService } from 'src/app/@core/implementation/receta.service';
import { ScriptUploadService } from 'src/app/@core/implementation/script-upload.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-preparacion-index',
  templateUrl: './preparacion-index.component.html',
  styleUrls: ['./preparacion-index.component.css']
})
export class PreparacionIndexComponent implements OnInit {

  public preparaciones : any;
  public cocineros : any;
  public especial : any;
  public recetas : any;
  public urlMono;
  public urlMico;
  public identity;

  constructor(
    private _preparacionService : PreparacionService,
    private _authService : AuthService,
    private _cocineroService : CocineroService,
    private _recetaService : RecetaService,
    private route : Router,
    private _uploadScriptService : ScriptUploadService
  ) {
    this.urlMono = environment.url_mono;
    this.urlMico = environment.url_micro;
    this.identity = this._authService.getIdentity();
    this._uploadScriptService.Upload(["script"])
   }

  ngOnInit(): void {

    this._preparacionService.getPreparaciones().subscribe(
      response => {
        this.preparaciones = response
      }
    )


  }

  removePreparacion(id:any){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success mx-3',
        cancelButton: 'btn btn-danger mx-3'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: '¿Seguro quieres eliminar el producto?',
      text: "No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Eliminado!',
          'El pedido fue eliminado correctamente.',
          'success'
        )

        this._preparacionService.removePreparacion(id).subscribe(
          response => {
            this._preparacionService.getPreparaciones().subscribe(
              response => {
                this.preparaciones = response;
              },
              error => {

              }
            )
          },
          error => {

          }
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Se canceló la petición',
          'error'
        )
      }
    })
  }

}
