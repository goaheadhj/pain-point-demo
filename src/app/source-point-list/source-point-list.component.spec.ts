import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcePointListComponent } from './source-point-list.component';

describe('PainPointListComponent', () => {
  let component: SourcePointListComponent;
  let fixture: ComponentFixture<SourcePointListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcePointListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcePointListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
