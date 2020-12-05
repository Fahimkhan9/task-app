import { ADD_TO_TASKLIST } from "./actionTypes";

const tasksstate = {
  tasklist: [],
};

const tasksReducer = (state = tasksstate, action) => {
  switch (action.type) {
    case ADD_TO_TASKLIST: {
      return {
        tasklist: [...state.tasklist, { title: action.payload }],
      };
    }

    default:
      return state;
  }
};

export { tasksReducer };
