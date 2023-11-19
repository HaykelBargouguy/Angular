import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteVisiteComponent } from './carte-visite.component';

describe('CarteVisiteComponent', () => {
  let component: CarteVisiteComponent;
  let fixture: ComponentFixture<CarteVisiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarteVisiteComponent]
    });
    fixture = TestBed.createComponent(CarteVisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
