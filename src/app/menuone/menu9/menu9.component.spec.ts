import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu9Component } from './menu9.component';

describe('Menu9Component', () => {
  let component: Menu9Component;
  let fixture: ComponentFixture<Menu9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Menu9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
