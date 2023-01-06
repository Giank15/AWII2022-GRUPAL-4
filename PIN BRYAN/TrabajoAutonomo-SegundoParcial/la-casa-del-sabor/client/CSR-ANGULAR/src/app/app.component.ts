import { Component } from '@angular/core';
import { ScriptUploadService } from './@core/implementation/script-upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private _uploadScriptService : ScriptUploadService
  ){
    this._uploadScriptService.Upload(["script"])
  }

  title = 'client';
}
