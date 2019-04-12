import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainPointListComponent } from './pain-point-list.component';

describe('PainPointListComponent', () => {
  let component: PainPointListComponent;
  let fixture: ComponentFixture<PainPointListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainPointListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainPointListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
