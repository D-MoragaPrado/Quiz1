import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimaBioBioComponent } from './clima-bio-bio.component';

describe('ClimaBioBioComponent', () => {
  let component: ClimaBioBioComponent;
  let fixture: ComponentFixture<ClimaBioBioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClimaBioBioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimaBioBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
