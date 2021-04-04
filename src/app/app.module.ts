import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

// import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SomoraPrincipalComponent } from './somora-principal/somora-principal.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { TareasComponent } from './tareas/tareas.component';
import { TareasPrivadasComponent } from './tareas-privadas/tareas-privadas.component';




@NgModule({
  declarations: [
    AppComponent,
    SomoraPrincipalComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    SignupComponent,
    TareasComponent,
    TareasPrivadasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    // RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

