import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasPrivadasComponent } from './tareas-privadas.component';

describe('TareasPrivadasComponent', () => {
  let component: TareasPrivadasComponent;
  let fixture: ComponentFixture<TareasPrivadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareasPrivadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasPrivadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
