import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootCauseItemComponent } from './root-cause-item.component';

describe('RootCauseItemComponent', () => {
  let component: RootCauseItemComponent;
  let fixture: ComponentFixture<RootCauseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootCauseItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootCauseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
