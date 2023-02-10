import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();
/* ToDo Data Atom */
interface toDoData {
  [key: string]: task[] | [];
}

export interface task {
  title: string;
  description?: string;
  id: number;
}

export const toDoDatasAtom = atom<toDoData>({
  key: 'toDoDatasAtom',
  default: {
    toDo: [{ title: 'todo1', description: 'des1', id: new Date().getTime() }],
    done: [],
  },
  effects_UNSTABLE: [persistAtom],
});

/* Theme Toggle Atom */
type isDark = boolean;

export const isDarkAtom = atom<isDark>({
  key: 'isDarkAtom',
  default: true,
  effects_UNSTABLE: [persistAtom],
});

/* Add Toggle Atom */
type addToggle = boolean;

export const addToggleAtom = atom<addToggle>({
  key: 'addToggleAtom',
  default: true,
});
