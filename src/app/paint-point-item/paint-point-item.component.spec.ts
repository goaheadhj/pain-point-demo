import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintPointItemComponent } from './paint-point-item.component';

describe('PaintPointItemComponent', () => {
  let component: PaintPointItemComponent;
  let fixture: ComponentFixture<PaintPointItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaintPointItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaintPointItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
