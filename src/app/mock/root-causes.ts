import { RootCauseModel } from '../models/root-cause.model';

export const rootCauses: RootCauseModel[] = [
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

export function rootCauseBy(id: number): RootCauseModel {
  return rootCauses.find(it => it.id === id);
}
