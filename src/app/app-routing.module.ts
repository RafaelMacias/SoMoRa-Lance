import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//?Componentes
import {HomeComponent} from './home/home.component'
import {TareasComponent} from './tareas/tareas.component'
import {TareasPrivadasComponent} from './tareas-privadas/tareas-privadas.component'
import {SignupComponent} from './signup/signup.component'
import {LoginComponent} from './login/login.component'

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
    component:TareasPrivadasComponent
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

// RouterModule.forRoot([
//   {path: '', component: HomeComponent},
//   {path: 'login', component: LoginComponent},
//   {path: 'signup', component: SignupComponent},
// ]),

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
