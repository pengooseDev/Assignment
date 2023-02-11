/* Action types */
const DONE = 'couter/DONE' as const;
const DISCARD = 'counter/DISCARD' as const;
const REMOVE = 'counter/REMOVE' as const;
const ADD_BY = 'counter/ADD_BY' as const;

interface addPayload {
  text: string;
  description: string;
}

interface donePayload {
  id: number;
}

interface removePayload {
  id: number;
}

/* Actions */
export const done = ({ id }: donePayload) => ({
  type: DONE,
  payload: { id },
});
export const discard = () => ({ type: DISCARD });
export const remove = ({ id }: removePayload) => ({
  type: remove,
  payload: { id },
});
export const addBy = ({ text, description }: addPayload) => ({
  type: ADD_BY,
  payload: { text, description },
});

/* Types */
type ToDosAction =
  | ReturnType<typeof done>
  | ReturnType<typeof discard>
  | ReturnType<typeof remove>
  | ReturnType<typeof addBy>;

export interface task {
  title: string;
  description?: string;
  id: number;
}

export interface toDoState {
  [key: string]: task[] | [];
}

/* 1. Initial State */

export type CounterState = {
  counter: number;
};

const initialToDos: toDoState = {
  toDo: [{ title: 'todo1', description: 'des1', id: new Date().getTime() }],
  done: [],
};

/* 2. Reducer : state를 action의 type에 따라 바꾸는 함수 */
const toDoReducer = (state: toDoState = initialToDos, action: ToDosAction) => {
  switch (action.type) {
    case DONE:
      const {
        payload: { id },
      } = action;
      const oldData = { ...state };
      const oldArr = [...oldData['toDo']];
      let targetIndex;

      oldArr.map((v, i) => {
        if (v.id === id) return (targetIndex = i);
      });

      if (!targetIndex && targetIndex !== 0) return state;

      const targetTask = oldArr.splice(targetIndex, 1)[0];
      const doneArr = [...state['done'], targetTask];
      return {
        toDo: oldArr,
        done: doneArr,
      };

    case DISCARD:
      return { te: 1 };

    case REMOVE:
      return { te: 1 };

    case ADD_BY:
      return { te: 1 };

    default:
      return state;
  }
};

export default toDoReducer;
