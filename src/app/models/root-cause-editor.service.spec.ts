import { TestBed } from '@angular/core/testing';

import { RootCauseEditor } from './root-cause-editor.service';
import { rootCauses } from '../mock/root-causes';
import { painPoints } from '../mock/pain-points';
import { Rect } from './rect';

describe('RootCauseEditor', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RootCauseEditor = TestBed.get(RootCauseEditor);
    expect(service).toBeTruthy();
  });

  it('should auto sort pain points by rootCauseId', () => {
    const service: RootCauseEditor = TestBed.get(RootCauseEditor);
    service.load(rootCauses, painPoints);
    expect(service.painPoints.map(it => it.payload.id)).toEqual([12, 13, 14, 11, 21, 31, 32, 33, 34]);
  });
  it('should get rect of pain points', () => {
    const service: RootCauseEditor = TestBed.get(RootCauseEditor);
    service.load(rootCauses, painPoints);
    expect(service.painPoints[0].rect).toEqual(new Rect(0, 0, 750, 60));
    expect(service.painPoints.map(it => it.rect.top)).toEqual([0, 60, 120, 180, 240, 300, 360, 420, 480]);
  });
  it('should get rect of root causes', () => {
    const service: RootCauseEditor = TestBed.get(RootCauseEditor);
    service.load(rootCauses, painPoints);
    expect(service.rootCauses[0].rect).toEqual(new Rect(850, 90, 250, 240));
    expect(service.rootCauses.map(it => it.rect.top)).toEqual([90, 240, 300]);
    expect(service.rootCauses.map(it => it.rect.height)).toEqual([240, 60, 60]);
    expect(service.rootCauses.map(it => it.rect.yCenter)).toEqual([210, 270, 330]);
  });

  it('should get width and height', () => {
    const service: RootCauseEditor = TestBed.get(RootCauseEditor);
    service.load(rootCauses, painPoints);
    expect(service.width).toEqual(1100);
    expect(service.height).toEqual(540);
  });
});
