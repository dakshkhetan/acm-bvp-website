import { DARK_MODE } from "./dark-mode.types";

const INITIAL_STATE = {
  darkMode: false
};

const darkModeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DARK_MODE:
      return {
        ...state,
        darkMode: !state.darkMode
      };

    default:
      return state;
  }
};

export default darkModeReducer;
