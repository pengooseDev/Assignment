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
  title: string;
}

/* Actions */
export const done = ({ title }: donePayload) => ({
  type: DONE,
  payload: { title },
});
export const discard = () => ({ type: DISCARD });
export const remove = () => ({ type: remove });
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
  toDo: task[] | [];
  done: task[] | [];
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
        payload: { title },
      } = action;
      const oldData = { ...state };
      const oldArr = [...oldData['toDo']];
      let targetIndex;

      oldArr.map((v, i) => {
        if (v.title === title) return (targetIndex = i);
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
