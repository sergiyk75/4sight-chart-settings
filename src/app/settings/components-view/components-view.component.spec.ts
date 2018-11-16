import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsViewComponent } from './components-view.component';

describe('ComponentsViewComponent', () => {
  let component: ComponentsViewComponent;
  let fixture: ComponentFixture<ComponentsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
