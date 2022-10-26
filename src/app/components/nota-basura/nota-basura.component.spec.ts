import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaBasuraComponent } from './nota-basura.component';

describe('NotaBasuraComponent', () => {
  let component: NotaBasuraComponent;
  let fixture: ComponentFixture<NotaBasuraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotaBasuraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotaBasuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
