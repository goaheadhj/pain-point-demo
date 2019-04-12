import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootCauseEditorComponent } from './root-cause-editor.component';

describe('RootCauseEditorComponent', () => {
  let component: RootCauseEditorComponent;
  let fixture: ComponentFixture<RootCauseEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootCauseEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootCauseEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
