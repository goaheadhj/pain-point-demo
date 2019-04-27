import { SourcePointModel } from '../models/source-point.model';

export const sourcePoints: SourcePointModel[] = [
  {
    id: 12,
    title: '痛点12',
    targetPointId: 1,
  },
  {
    id: 13,
    title: '痛点13',
    targetPointId: 1,
  },
  {
    id: 14,
    title: '痛点14',
    targetPointId: 1,
  },
  {
    id: 21,
    title: '痛点21',
    targetPointId: 2,
  },
  {
    id: 31,
    title: '痛点31',
  },
  {
    id: 32,
    title: '痛点32',
  },
  {
    id: 33,
    title: '痛点33',
  },
  {
    id: 34,
    title: '痛点34',
  },
  {
    id: 11,
    title: '痛点11',
    targetPointId: 1,
  },
];

export function sourcePointBy(id: number): SourcePointModel {
  return sourcePoints.find(it => it.id === id);
}
