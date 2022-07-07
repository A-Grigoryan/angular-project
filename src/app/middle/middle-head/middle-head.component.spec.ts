import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleHeadComponent } from './middle-head.component';

describe('MiddleHeadComponent', () => {
  let component: MiddleHeadComponent;
  let fixture: ComponentFixture<MiddleHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiddleHeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
