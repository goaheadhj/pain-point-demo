import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcePointLinkComponent } from './source-point-link.component';

describe('RootCauseLinkComponent', () => {
  let component: SourcePointLinkComponent;
  let fixture: ComponentFixture<SourcePointLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcePointLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcePointLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
