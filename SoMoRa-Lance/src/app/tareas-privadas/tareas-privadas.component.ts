import { Component, OnInit } from '@angular/core';
import { TareasService } from '../services/tareas.service'


@Component({
  selector: 'app-tareas-privadas',
  templateUrl: './tareas-privadas.component.html',
  styleUrls: ['./tareas-privadas.component.css']
})
export class TareasPrivadasComponent implements OnInit {

  constructor(private tareasService: TareasService) { }

  tareas = [];

  ngOnInit(): void {
    this.tareasService.getTareas()
    .subscribe(
      res => {
        console.log(res);
        this.tareas = res
      },
      err => console.log(err)
    )
  }

}
