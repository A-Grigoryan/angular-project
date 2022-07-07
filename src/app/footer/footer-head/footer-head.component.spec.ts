import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterHeadComponent } from './footer-head.component';

describe('FooterHeadComponent', () => {
  let component: FooterHeadComponent;
  let fixture: ComponentFixture<FooterHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterHeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
