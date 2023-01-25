import { MutableRefObject } from 'react';

export interface ISection {
  id: number;
  name: string;
  element: HTMLElement;
}

export type TRegister = (name: string) => {
  ref: (element: HTMLElement) => void;
};

export interface IActions {
  sections: MutableRefObject<ISection[]>;
  register: TRegister;
}
