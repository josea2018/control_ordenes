import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenesCrudComponent } from './ordenes-crud.component';

describe('OrdenesCrudComponent', () => {
  let component: OrdenesCrudComponent;
  let fixture: ComponentFixture<OrdenesCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdenesCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenesCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
