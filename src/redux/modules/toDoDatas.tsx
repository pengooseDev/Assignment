/* Action types */
const DONE = 'couter/DONE' as const;
const DISCARD = 'counter/DISCARD' as const;
const REMOVE = 'counter/REMOVE' as const;
const ADD = 'counter/ADD' as const;

interface addPayload {
  addTitle: string;
  addDescription: string;
}

interface donePayload {
  idDone: number;
}

interface discardPayload {
  idDiscard: number;
}

interface removePayload {
  idRemove: number;
  removeBoardKey: string;
}

/* Actions */
export const done = ({ idDone }: donePayload) => ({
  type: DONE,
  payload: { idDone },
});

export const discard = ({ idDiscard }: discardPayload) => ({
  type: DISCARD,
  payload: { idDiscard },
});

export const remove = ({ idRemove, removeBoardKey }: removePayload) => ({
  type: REMOVE,
  payload: { idRemove, removeBoardKey },
});

export const add = ({ addTitle, addDescription }: addPayload) => ({
  type: ADD,
  payload: { addTitle, addDescription },
});

/* Types */
type ToDosAction =
  | ReturnType<typeof done>
  | ReturnType<typeof discard>
  | ReturnType<typeof remove>
  | ReturnType<typeof add>;

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
        payload: { idDone },
      } = action;
      const oldDoneData = { ...state };
      const oldDoneArr = [...oldDoneData['toDo']];
      let targetDoneIndex;

      oldDoneArr.map((v, i) => {
        if (v.id === idDone) return (targetDoneIndex = i);
      });

      if (!targetDoneIndex && targetDoneIndex !== 0) return state;

      const targetDoneTask = oldDoneArr.splice(targetDoneIndex, 1)[0];
      const doneArr = [...state['done'], targetDoneTask];
      return {
        toDo: oldDoneArr,
        done: doneArr,
      };

    case DISCARD:
      const {
        payload: { idDiscard },
      } = action;
      const oldDiscardData = { ...state };
      const oldDiscardArr = [...oldDiscardData['done']];
      let targetDiscardIndex;

      oldDiscardArr.map((v, i) => {
        if (v.id === idDiscard) return (targetDiscardIndex = i);
      });

      if (!targetDiscardIndex && targetDiscardIndex !== 0) return state;

      const targetTask = oldDiscardArr.splice(targetDiscardIndex, 1)[0];
      const toDoArr = [...state['toDo'], targetTask];
      return {
        toDo: toDoArr,
        done: oldDiscardArr,
      };

    case REMOVE:
      const {
        payload: { idRemove, removeBoardKey },
      } = action;
      const oldRemoveData = { ...state };
      const oldRemoveArr = [...oldRemoveData[removeBoardKey]];
      let targetIndex;

      oldRemoveArr.map((v, i) => {
        if (v.id === idRemove) return (targetIndex = i);
      });

      if (!targetIndex && targetIndex !== 0) return state;
      oldRemoveArr.splice(targetIndex, 1);

      return {
        ...state,
        [removeBoardKey]: oldRemoveArr,
      };

    case ADD:
      const {
        payload: { addTitle, addDescription },
      } = action;

      const oldToDoArr = state['toDo'];
      const newToDoArr = [
        ...oldToDoArr,
        {
          title: addTitle,
          description: addDescription,
          id: new Date().getTime(),
        },
      ];

      const newToDosData = {
        ...state,
        toDo: newToDoArr,
      };

      return newToDosData;

    default:
      return state;
  }
};

export default toDoReducer;
