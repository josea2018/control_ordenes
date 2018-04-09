import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioCrudComponent } from './inventario-crud.component';

describe('InventarioCrudComponent', () => {
  let component: InventarioCrudComponent;
  let fixture: ComponentFixture<InventarioCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventarioCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventarioCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
