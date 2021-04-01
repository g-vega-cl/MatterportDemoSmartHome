import { ItemDesc, Category } from "./types";
import { Vector3} from "three";

export class AppState {
  sid: string = '';
  items: Map<Category, ItemDesc[]> = new Map();
  slots: Map<string, Category> = new Map();
}


export const slots: Map<string, Category> = new Map();
slots.set('slot_1', Category.Light_1);
slots.set('slot_2', Category.Light_2);
slots.set('slot_3', Category.Light_3);
slots.set('slot_4', Category.Light_4);
slots.set('slot_5', Category.Light_5);
slots.set('slot_6', Category.Light_6);

const Slot_1_items: ItemDesc[] = [
  {
    name: 'ON',
    url: 'ON',
    categories: [ Category.Light_1 ],
    position: new Vector3(0, -0.5, 0),
    rotation: new Vector3(0, 0, 0),
    scale: new Vector3(0.0001, 0.0001, 0.0001),
  },
  {
    name: 'OFF',
    url: 'OFF',
    categories: [ Category.Light_1 ],
    position: new Vector3(5.2, -0.5, 0),
    rotation: new Vector3(0, 0, 0),
    scale: new Vector3(0.0001, 0.0001, 0.0001),
  },
];

const Slot_2_items: ItemDesc[] = [
  {
    name: 'ON',
    url: 'ON',
    categories: [ Category.Light_2 ],
    position: new Vector3(0, -0.5, 0),
    rotation: new Vector3(0, 90, 0),
    scale: new Vector3(0.0001, 0.0001, 0.0001),
  },
  {
    name: 'OFF',
    url: 'OFF',
    categories: [ Category.Light_2 ],
    position: new Vector3(5.2, -0.5, 0),
    rotation: new Vector3(0, 0, 0),
    scale: new Vector3(0.0001, 0.0001, 0.0001),
  },
];

const Slot_3_items: ItemDesc[] = [
  {
    name: 'ON',
    url: 'ON',
    categories: [ Category.Light_3 ],
    position: new Vector3(0, -0.5, 0),
    rotation: new Vector3(0, 90, 0),
    scale: new Vector3(0.0001, 0.0001, 0.0001),
  },
  {
    name: 'OFF',
    url: 'OFF',
    categories: [ Category.Light_3 ],
    position: new Vector3(5.2, -0.5, 0),
    rotation: new Vector3(0, 0, 0),
    scale: new Vector3(0.0001, 0.0001, 0.0001),
  },
];

const Slot_4_items: ItemDesc[] = [
  {
    name: 'ON',
    url: 'ON',
    categories: [ Category.Light_4 ],
    position: new Vector3(0, -0.5, 0),
    rotation: new Vector3(0, 90, 0),
    scale: new Vector3(0.0001, 0.0001, 0.0001),
  },
  {
    name: 'OFF',
    url: 'OFF',
    categories: [ Category.Light_4 ],
    position: new Vector3(5.2, -0.5, 0),
    rotation: new Vector3(0, 0, 0),
    scale: new Vector3(0.0001, 0.0001, 0.0001),
  },
];

const Slot_5_items: ItemDesc[] = [
  {
    name: 'ON',
    url: 'ON',
    categories: [ Category.Light_5 ],
    position: new Vector3(0, -0.5, 0),
    rotation: new Vector3(0, 90, 0),
    scale: new Vector3(0.0001, 0.0001, 0.0001),
  },
  {
    name: 'OFF',
    url: 'OFF',
    categories: [ Category.Light_5 ],
    position: new Vector3(5.2, -0.5, 0),
    rotation: new Vector3(0, 0, 0),
    scale: new Vector3(0.0001, 0.0001, 0.0001),
  },
];

const Slot_6_items: ItemDesc[] = [
  {
    name: 'ON',
    url: 'ON',
    categories: [ Category.Light_6 ],
    position: new Vector3(0, -0.5, 0),
    rotation: new Vector3(0, 90, 0),
    scale: new Vector3(0.0001, 0.0001, 0.0001),
  },
  {
    name: 'OFF',
    url: 'OFF',
    categories: [ Category.Light_6 ],
    position: new Vector3(5.2, -0.5, 0),
    rotation: new Vector3(0, 0, 0),
    scale: new Vector3(0.0001, 0.0001, 0.0001),
  },
];

export const items: Map<Category, ItemDesc[]> = new Map();
items.set(Category.Light_1, Slot_1_items);
items.set(Category.Light_2, Slot_2_items);
items.set(Category.Light_3, Slot_3_items);
items.set(Category.Light_4, Slot_4_items);
items.set(Category.Light_5, Slot_5_items);
items.set(Category.Light_6, Slot_6_items);
