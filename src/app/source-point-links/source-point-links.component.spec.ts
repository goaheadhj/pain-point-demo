import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcePointLinksComponent } from './source-point-links.component';

describe('RootCauseLinksComponent', () => {
  let component: SourcePointLinksComponent;
  let fixture: ComponentFixture<SourcePointLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcePointLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcePointLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
