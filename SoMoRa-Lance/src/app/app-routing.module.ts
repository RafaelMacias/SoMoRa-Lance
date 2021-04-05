import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//?Componentes
import {HomeComponent} from './home/home.component'
import {TareasComponent} from './tareas/tareas.component'
import {TareasPrivadasComponent} from './tareas-privadas/tareas-privadas.component'
import {SignupComponent} from './signup/signup.component'
import {LoginComponent} from './login/login.component'

import { AuthGuard } from './auth.guard'
import { from } from 'rxjs';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
    // redirectTo: '/home',
    // pathMatch: 'full'
  },
  {
    path: 'tareas',
    component:TareasComponent
  },
  {
    path: 'privadas',
    component:TareasPrivadasComponent,
    canActivate: [AuthGuard]  //* protege la ruta privada
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
