import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorMonedaComponentComponent } from './selector-moneda-component.component';

describe('SelectorMonedaComponentComponent', () => {
  let component: SelectorMonedaComponentComponent;
  let fixture: ComponentFixture<SelectorMonedaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorMonedaComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorMonedaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
