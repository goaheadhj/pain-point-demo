import { TargetPointModel } from '../models/target-point.model';

export const targetPoint: TargetPointModel[] = [
  {
    id: 1,
    title: '根因1',
  },
  {
    id: 2,
    title: '根因2',
  },
  {
    id: 3,
    title: '根因3',
  },
];

export function targetPointBy(id: number): TargetPointModel {
  return targetPoint.find(it => it.id === id);
}
