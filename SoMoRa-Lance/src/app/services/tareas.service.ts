import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'



@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private URL = '/api'
  // private URL = 'http://localhost:8080/api'
  constructor(private http: HttpClient) { }

  getTareas(){
    return this.http.get<any>(this.URL +  '/tareas');
  }

  getTareasPrivadas(){
    return this.http.get(this.URL +  '/tareas-privadas');
  }
}
