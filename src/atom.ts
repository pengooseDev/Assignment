import { atom } from 'recoil';

interface toDoData {
  [key: string]: task[];
}

interface task {
  title: string;
  description: string;
}

export const toDoAtom = atom<toDoData>({
  key: 'toDoAtom',
  default: {
    toDo: [],
    done: [],
  },
});
