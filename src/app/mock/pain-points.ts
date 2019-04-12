import { PainPointModel } from '../models/pain-point.model';

export const painPoints: PainPointModel[] = [
  {
    id: 11,
    title: '痛点11',
    rootCauseId: 1,
  },
  {
    id: 12,
    title: '痛点12',
    rootCauseId: 1,
  },
  {
    id: 13,
    title: '痛点13',
    rootCauseId: 1,
  },
  {
    id: 14,
    title: '痛点14',
    rootCauseId: 1,
  },
  {
    id: 21,
    title: '痛点21',
    rootCauseId: 2,
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
];

export function painPointBy(id: number): PainPointModel {
  return painPoints.find(it => it.id === id);
}
