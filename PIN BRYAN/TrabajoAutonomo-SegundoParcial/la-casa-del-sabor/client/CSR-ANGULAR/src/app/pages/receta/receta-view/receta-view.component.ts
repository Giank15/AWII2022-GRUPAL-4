import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/@core/implementation/auth.service';
import { RecetaService } from 'src/app/@core/implementation/receta.service';
import { ScriptUploadService } from 'src/app/@core/implementation/script-upload.service';

@Component({
  selector: 'app-receta-view',
  templateUrl: './receta-view.component.html',
  styleUrls: ['./receta-view.component.css']
})
export class RecetaViewComponent implements OnInit {

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

}
