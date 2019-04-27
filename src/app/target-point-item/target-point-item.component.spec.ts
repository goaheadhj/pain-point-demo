import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetPointItemComponent } from './target-point-item.component';

describe('RootCauseItemComponent', () => {
  let component: TargetPointItemComponent;
  let fixture: ComponentFixture<TargetPointItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetPointItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetPointItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
