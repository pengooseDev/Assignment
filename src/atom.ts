import { atom } from 'recoil';

/* ToDo Data Atom */
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

/* Theme Toggle Atom */
type isDark = boolean;

export const isDarkAtom = atom<isDark>({
  key: 'isDarkAtom',
  default: true,
});

/* Add Toggle Atom */
type addToggle = boolean;

export const addToggleAtom = atom<addToggle>({
  key: 'addToggleAtom',
  default: false,
});
