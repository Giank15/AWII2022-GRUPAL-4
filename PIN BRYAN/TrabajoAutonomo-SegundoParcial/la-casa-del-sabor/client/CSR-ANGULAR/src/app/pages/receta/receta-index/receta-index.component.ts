import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/@core/implementation/auth.service';
import { RecetaService } from 'src/app/@core/implementation/receta.service';
import { ScriptUploadService } from 'src/app/@core/implementation/script-upload.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-receta-index',
  templateUrl: './receta-index.component.html',
  styleUrls: ['./receta-index.component.css']
})
export class RecetaIndexComponent implements OnInit {

  public recetas : any;
  public url;
  public identity : any;

  constructor(
    private _recetaService : RecetaService,
    private _authService : AuthService,
    private router : Router,
    private _uploadScriptService : ScriptUploadService
  ) {
    this.url = environment.url_micro;
    this.identity = _authService.getIdentity()
    this._uploadScriptService.Upload(["script"])
  }

  ngOnInit(): void {

    if(this.identity.role == 'ADMIN' || this.identity.role == 'COCINERO'){
      this._recetaService.getRecetas().subscribe(
        response => {
          console.log(response);

          this.recetas = response.receta;
        }
      )
    } else {
      this.router.navigate(['']);
    }


  }

  removeReceta(id:any){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success mx-3',
        cancelButton: 'btn btn-danger mx-3'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: '¿Seguro quieres eliminar esta receta?',
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
          'La receta fue eliminada correctamente.',
          'success'
        )

        this._recetaService.removeRecetas(id).subscribe(
          response => {
            this._recetaService.getRecetas().subscribe(
              response => {
                this.recetas = response;
              }
            )
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
