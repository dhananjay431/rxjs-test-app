import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu8Component } from './menu8.component';

describe('Menu8Component', () => {
  let component: Menu8Component;
  let fixture: ComponentFixture<Menu8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Menu8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
