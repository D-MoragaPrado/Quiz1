import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarClimaComponent } from './modificar-clima.component';

describe('ModificarClimaComponent', () => {
  let component: ModificarClimaComponent;
  let fixture: ComponentFixture<ModificarClimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarClimaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarClimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
