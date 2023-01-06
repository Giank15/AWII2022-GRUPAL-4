import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/@core/implementation/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public identity : any;
  public token : any;

  constructor(
    private _authService : AuthService,
    private _router : Router,
  ) {
    this.identity = this._authService.getIdentity();
    this.token = this._authService.getToken();
   }

  ngOnInit(): void {
  }

  logout(){
    //LOGOUT
    localStorage.removeItem('identity');
    localStorage.removeItem('token');

    //KEYS = NULL
    this.identity = null;
    this.token = null;

    //REDIRECCIONAMIENTO
    this._router.navigate(['']);
  }

}
