import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimaMetropolitanaComponent } from './clima-metropolitana.component';

describe('ClimaMetropolitanaComponent', () => {
  let component: ClimaMetropolitanaComponent;
  let fixture: ComponentFixture<ClimaMetropolitanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClimaMetropolitanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimaMetropolitanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
