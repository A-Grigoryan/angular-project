import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstHeadComponent } from './first-head.component';

describe('FirstHeadComponent', () => {
  let component: FirstHeadComponent;
  let fixture: ComponentFixture<FirstHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstHeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
