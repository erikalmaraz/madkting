import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { productsDetailComponent } from './products-detail.component';

describe('productsDetailComponent', () => {
  let component: productsDetailComponent;
  let fixture: ComponentFixture<productsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ productsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(productsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
