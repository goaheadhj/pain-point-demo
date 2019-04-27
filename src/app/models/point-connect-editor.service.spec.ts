import { TestBed } from '@angular/core/testing';

import { PointConnectEditor } from './point-connect-editor.service';
import { targetPoint } from '../mock/target-point';
import { sourcePoints } from '../mock/source-points';
import { Rect } from './rect';

describe('PointConnectEditor', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PointConnectEditor = TestBed.get(PointConnectEditor);
    expect(service).toBeTruthy();
  });

  it('should auto sort pain points by rootCauseId', () => {
    const service: PointConnectEditor = TestBed.get(PointConnectEditor);
    service.load(targetPoint, sourcePoints);
    expect(service.sourcePoints.map(it => it.payload.id)).toEqual([12, 13, 14, 11, 21, 31, 32, 33, 34]);
  });
  it('should get rect of pain points', () => {
    const service: PointConnectEditor = TestBed.get(PointConnectEditor);
    service.load(targetPoint, sourcePoints);
    expect(service.sourcePoints[0].rect).toEqual(new Rect(0, 0, 750, 60));
    expect(service.sourcePoints.map(it => it.rect.top)).toEqual([0, 60, 120, 180, 240, 300, 360, 420, 480]);
  });
  it('should get rect of root causes', () => {
    const service: PointConnectEditor = TestBed.get(PointConnectEditor);
    service.load(targetPoint, sourcePoints);
    expect(service.targetPoints[0].rect).toEqual(new Rect(850, 90, 250, 240));
    expect(service.targetPoints.map(it => it.rect.top)).toEqual([90, 240, 300]);
    expect(service.targetPoints.map(it => it.rect.height)).toEqual([240, 60, 60]);
    expect(service.targetPoints.map(it => it.rect.yCenter)).toEqual([210, 270, 330]);
  });

  it('should get width and height', () => {
    const service: PointConnectEditor = TestBed.get(PointConnectEditor);
    service.load(targetPoint, sourcePoints);
    expect(service.width).toEqual(1100);
    expect(service.height).toEqual(540);
  });
});
