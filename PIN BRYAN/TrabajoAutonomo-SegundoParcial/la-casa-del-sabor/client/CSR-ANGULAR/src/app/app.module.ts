import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ScriptUploadService } from './@core/implementation/script-upload.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './@theme/page-not-found/page-not-found.component';
import { HomeComponent } from './@theme/home/home.component';
import { SidebarComponent } from './@theme/sidebar/sidebar.component';
import { AuthComponent } from './pages/auth/auth.component';
import { CocineroCreateComponent } from './pages/cocinero/cocinero-create/cocinero-create.component';
import { CocineroEditComponent } from './pages/cocinero/cocinero-edit/cocinero-edit.component';
import { CocineroIndexComponent } from './pages/cocinero/cocinero-index/cocinero-index.component';
import { RecetaIndexComponent } from './pages/receta/receta-index/receta-index.component';
import { RecetaEditComponent } from './pages/receta/receta-edit/receta-edit.component';
import { RecetaViewComponent } from './pages/receta/receta-view/receta-view.component';
import { RecetaCreateComponent } from './pages/receta/receta-create/receta-create.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PreparacionIndexComponent } from './pages/preparacion/preparacion-index/preparacion-index.component';
import { PreparacionCreateComponent } from './pages/preparacion/preparacion-create/preparacion-create.component';
import { PreparacionEditComponent } from './pages/preparacion/preparacion-edit/preparacion-edit.component';
import { PreparacionViewComponent } from './pages/preparacion/preparacion-view/preparacion-view.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    SidebarComponent,
    AuthComponent,
    CocineroCreateComponent,
    CocineroEditComponent,
    CocineroIndexComponent,
    RecetaIndexComponent,
    RecetaEditComponent,
    RecetaViewComponent,
    RecetaCreateComponent,
    PreparacionIndexComponent,
    PreparacionCreateComponent,
    PreparacionEditComponent,
    PreparacionViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ScriptUploadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
