import { Vector3 } from 'three';

export enum Category {
  Light_1 = 'Light_1',
  Light_2 = 'Light_2',
  Light_3 = 'Light_3',
  Light_4 = 'Light_4',
  Light_5 = 'Light_5',
  Light_6 = 'Light_6',
}

export type ItemDesc = {
  name: string;
  url: string;
  position: Vector3;
  rotation: Vector3;
  scale: Vector3;
  categories: Category[];
};

export type SlotDesc = {
  name: string;
  category: Category;
};

export type Instance<T> = {
  desc: T;
  sceneObject: any;
};
