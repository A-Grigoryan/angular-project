import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalProductComponent } from './global-product.component';

describe('GlobalProductComponent', () => {
  let component: GlobalProductComponent;
  let fixture: ComponentFixture<GlobalProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
