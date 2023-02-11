/* Action types */
const TOGGLE = 'themeToggle' as const;

export const toggle = () => ({ type: TOGGLE });

const initialTheme: boolean = true;

type ThemeAction = ReturnType<typeof toggle>;

const toggleReducer = (state: boolean = initialTheme, action: ThemeAction) => {
  switch (action.type) {
    case TOGGLE:
      return !state;
  }
};

export default toggleReducer;
