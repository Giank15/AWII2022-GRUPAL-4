import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/@core/implementation/auth.service';
import { CocineroService } from 'src/app/@core/implementation/cocinero.service';
import { ScriptUploadService } from 'src/app/@core/implementation/script-upload.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cocinero-index',
  templateUrl: './cocinero-index.component.html',
  styleUrls: ['./cocinero-index.component.css']
})
export class CocineroIndexComponent implements OnInit {

  public cocineros : any;
  public url;
  public identity : any;
  // public p : any;

  constructor(
    private _cocineroService : CocineroService,
    private _authService : AuthService,
    private router : Router,
    private _uploadScriptService : ScriptUploadService
  ) {
    this.url = environment.url_mono;
    this.identity = _authService.getIdentity();
    this._uploadScriptService.Upload(["script"])
  }

  ngOnInit(): void {

    if(this.identity.role == 'ADMIN'){

      this._cocineroService.getCocineros().subscribe(
        response => {
          this.cocineros = response;
        }
      )

    } else {
      this.router.navigate(['']);
    }

  }

  removeCocinero(id:any){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success mx-3',
        cancelButton: 'btn btn-danger mx-3'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: '¿Seguro quieres eliminar este cocinero?',
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
          'El usuario fue eliminado correctamente.',
          'success'
        )

        this._cocineroService.removeCocinero(id).subscribe(
          response => {
            this._cocineroService.getCocineros().subscribe(
              response => {
                this.cocineros = response;
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
