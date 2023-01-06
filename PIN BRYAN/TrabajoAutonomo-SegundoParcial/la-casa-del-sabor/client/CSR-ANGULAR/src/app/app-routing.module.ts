import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './@theme/home/home.component';
import { AuthComponent } from './pages/auth/auth.component';
import { CocineroCreateComponent } from './pages/cocinero/cocinero-create/cocinero-create.component';
import { CocineroEditComponent } from './pages/cocinero/cocinero-edit/cocinero-edit.component';
import { CocineroIndexComponent } from './pages/cocinero/cocinero-index/cocinero-index.component';
import { PreparacionCreateComponent } from './pages/preparacion/preparacion-create/preparacion-create.component';
import { PreparacionEditComponent } from './pages/preparacion/preparacion-edit/preparacion-edit.component';
import { PreparacionIndexComponent } from './pages/preparacion/preparacion-index/preparacion-index.component';
import { PreparacionViewComponent } from './pages/preparacion/preparacion-view/preparacion-view.component';
import { RecetaCreateComponent } from './pages/receta/receta-create/receta-create.component';
import { RecetaEditComponent } from './pages/receta/receta-edit/receta-edit.component';
import { RecetaIndexComponent } from './pages/receta/receta-index/receta-index.component';
import { RecetaViewComponent } from './pages/receta/receta-view/receta-view.component';

const routes: Routes = [

  //TODO RUTAS PRINCIPALES
  {path: '', component: AuthComponent},
  {path: 'home', component: HomeComponent},
  {path: 'cocinero', component: CocineroIndexComponent},
  {path: 'receta', component: RecetaIndexComponent},
  {path: 'preparacion', component: PreparacionIndexComponent},

  //TODO RUTAS DE CONTROLLADORES
  {path: 'cocinero/registro', component: CocineroCreateComponent},
  {path: 'cocinero/editar/:id', component: CocineroEditComponent},
  {path: 'receta/registro', component: RecetaCreateComponent},
  {path: 'receta/editar/:id', component: RecetaEditComponent},
  {path: 'receta/view/:id', component: RecetaViewComponent},
  {path: 'preparacion/registro', component: PreparacionCreateComponent},
  {path: 'preparacion/editar/:id', component: PreparacionEditComponent},
  {path: 'preparacion/view/:id', component: PreparacionViewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
