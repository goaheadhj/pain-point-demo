import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcePointItemComponent } from './source-point-item.component';

describe('PaintPointItemComponent', () => {
  let component: SourcePointItemComponent;
  let fixture: ComponentFixture<SourcePointItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcePointItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcePointItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
