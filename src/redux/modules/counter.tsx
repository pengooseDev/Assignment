// /* 0. Action Type */
// const INCREASE = 'counter/INCREASE' as const;
// const DECREASE = 'counter/DECREASE' as const;
// const INCREASE_BY = 'counter/INCREASE_BY' as const;

/* Action types */
const INCREASE = 'couter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseBy = (amount: number) => ({
  type: INCREASE_BY,
  payload: amount,
});

type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>;

/* 1. Initial State */

export type CounterState = {
  counter: number;
};

const initialState: CounterState = {
  counter: 0,
};

/* 2. Reducer : state를 action의 type에 따라 바꾸는 함수 */
const counter = (state: CounterState = initialState, action: CounterAction) => {
  const { counter } = state;

  switch (action.type) {
    case INCREASE:
      return { counter: counter + 1 };

    case DECREASE:
      return { counter: counter - 1 };

    case INCREASE_BY:
      return { counter: state.counter + action.payload };

    default:
      return state;
  }
};

export default counter;
