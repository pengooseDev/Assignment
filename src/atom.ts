import { atom, selector } from 'recoil';

/* ToDo Data Atom */
interface toDoData {
  [key: string]: task[];
}

interface task {
  title: string;
  description?: string;
}

export const toDoAtom = atom<toDoData>({
  key: 'toDoAtom',
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
    const allTask = get(toDoAtom);
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
