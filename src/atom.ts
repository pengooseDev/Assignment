import { atom, selector } from 'recoil';

/* ToDo Data Atom */
interface toDoData {
  [key: string]: task[];
}

export interface task {
  title: string;
  description?: string;
}

export const toDoDatasAtom = atom<toDoData>({
  key: 'toDoDatasAtom',
  default: {
    toDo: [
      { title: 'todo1', description: 'des1' },
      { title: 'todo2', description: 'des2' },
    ],
    done: [
      { title: 'done1', description: 'des1' },
      { title: 'done2', description: 'des2' },
    ],
  },
});

export const toDoSelector = selector({
  key: 'todos',
  get: ({ get }) => {
    const allTask = get(toDoDatasAtom);
    const { toDo } = allTask;

    return toDo;
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
