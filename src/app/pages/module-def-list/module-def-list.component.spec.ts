import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleDefListComponent } from './module-def-list.component';

describe('ModuleDefListComponent', () => {
  let component: ModuleDefListComponent;
  let fixture: ComponentFixture<ModuleDefListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleDefListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleDefListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
