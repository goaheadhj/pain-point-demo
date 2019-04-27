import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetPointListComponent } from './target-point-list.component';

describe('RootCauseListComponent', () => {
  let component: TargetPointListComponent;
  let fixture: ComponentFixture<TargetPointListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetPointListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetPointListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
