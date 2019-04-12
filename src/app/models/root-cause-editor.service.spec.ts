import { TestBed } from '@angular/core/testing';

import { RootCauseEditor } from './root-cause-editor.service';
import { rootCauseBy } from '../mock/root-causes';

describe('RootCauseEditor', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RootCauseEditor = TestBed.get(RootCauseEditor);
    expect(service).toBeTruthy();
  });

  it('y of root causes', () => {
    const service: RootCauseEditor = TestBed.get(RootCauseEditor);
    expect(service.yOf(rootCauseBy(1))).toEqual(0);
    expect(service.yOf(rootCauseBy(2))).toEqual(240);
    expect(service.yOf(rootCauseBy(3))).toEqual(300);
  });
});
