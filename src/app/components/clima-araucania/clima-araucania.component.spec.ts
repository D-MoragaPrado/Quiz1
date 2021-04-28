import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimaAraucaniaComponent } from './clima-araucania.component';

describe('ClimaAraucaniaComponent', () => {
  let component: ClimaAraucaniaComponent;
  let fixture: ComponentFixture<ClimaAraucaniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClimaAraucaniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimaAraucaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
