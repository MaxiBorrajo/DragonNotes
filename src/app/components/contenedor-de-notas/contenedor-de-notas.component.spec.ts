import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorDeNotasComponent } from './contenedor-de-notas.component';

describe('ContenedorDeNotasComponent', () => {
  let component: ContenedorDeNotasComponent;
  let fixture: ComponentFixture<ContenedorDeNotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorDeNotasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenedorDeNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
