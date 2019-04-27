import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointConnectEditorComponent } from './point-connect-editor.component';

describe('RootCauseEditorComponent', () => {
  let component: PointConnectEditorComponent;
  let fixture: ComponentFixture<PointConnectEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointConnectEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointConnectEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
