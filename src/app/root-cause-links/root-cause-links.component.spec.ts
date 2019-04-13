import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootCauseLinksComponent } from './root-cause-links.component';

describe('RootCauseLinksComponent', () => {
  let component: RootCauseLinksComponent;
  let fixture: ComponentFixture<RootCauseLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootCauseLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootCauseLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
