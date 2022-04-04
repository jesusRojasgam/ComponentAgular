import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMonedaComponentComponent } from './card-moneda-component.component';

describe('CardMonedaComponentComponent', () => {
  let component: CardMonedaComponentComponent;
  let fixture: ComponentFixture<CardMonedaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMonedaComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMonedaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
