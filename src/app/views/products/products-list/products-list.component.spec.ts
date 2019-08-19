import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { productsListComponent } from './products-list.component';

describe('productsListComponent', () => {
  let component: productsListComponent;
  let fixture: ComponentFixture<productsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ productsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(productsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
