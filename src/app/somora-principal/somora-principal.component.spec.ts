import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomoraPrincipalComponent } from './somora-principal.component';

describe('SomoraPrincipalComponent', () => {
  let component: SomoraPrincipalComponent;
  let fixture: ComponentFixture<SomoraPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomoraPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SomoraPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
