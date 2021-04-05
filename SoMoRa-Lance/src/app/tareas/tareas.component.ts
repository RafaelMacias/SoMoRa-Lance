import { Component, OnInit } from '@angular/core';
import { TareasService } from '../services/tareas.service'

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  tareas = [];

  constructor(private tareasService: TareasService) { }

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
