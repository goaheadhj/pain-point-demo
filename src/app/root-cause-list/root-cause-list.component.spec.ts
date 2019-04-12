import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootCauseListComponent } from './root-cause-list.component';

describe('RootCauseListComponent', () => {
  let component: RootCauseListComponent;
  let fixture: ComponentFixture<RootCauseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootCauseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootCauseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
