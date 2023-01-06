import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/@core/implementation/auth.service';
import { CocineroService } from 'src/app/@core/implementation/cocinero.service';
import { PreparacionService } from 'src/app/@core/implementation/preparacion.service';
import { RecetaService } from 'src/app/@core/implementation/receta.service';
import { ScriptUploadService } from 'src/app/@core/implementation/script-upload.service';

@Component({
  selector: 'app-preparacion-view',
  templateUrl: './preparacion-view.component.html',
  styleUrls: ['./preparacion-view.component.css']
})
export class PreparacionViewComponent implements OnInit {

  public id : any;
  public preparacion : any;
  public cocinero : any;
  public receta : any;
  public identity : any;

  constructor(
    private _route : ActivatedRoute,
    private _recetaService : RecetaService,
    private _preparacionService : PreparacionService,
    private _cocineroService : CocineroService,
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

            this._cocineroService.getCocinero(response.idCocinero).subscribe(
              response => {
                console.log(response);
                this.cocinero = response
              }
            )

            this._recetaService.getReceta(response.idReceta).subscribe(
              response => {
                this.receta = response.receta
              }
            )
          }
        )





      })
    } else {
      this.router.navigate(['']);
    }
  }

}
