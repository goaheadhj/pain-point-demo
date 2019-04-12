import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootCauseLinkComponent } from './root-cause-link.component';

describe('RootCauseLinkComponent', () => {
  let component: RootCauseLinkComponent;
  let fixture: ComponentFixture<RootCauseLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootCauseLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootCauseLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
