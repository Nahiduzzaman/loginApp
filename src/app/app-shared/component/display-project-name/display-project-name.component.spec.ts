import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayProjectNameComponent } from './display-project-name.component';

describe('DisplayProjectNameComponent', () => {
  let component: DisplayProjectNameComponent;
  let fixture: ComponentFixture<DisplayProjectNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayProjectNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayProjectNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
