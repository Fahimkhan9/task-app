import { ADD_TASK_TO_TASKLIST, ADD_TO_TASKLIST } from "./actionTypes";

const tasksstate = {
  tasklist: [],
  tasksOfTaskList: [],
};

const tasksReducer = (state = tasksstate, action) => {
  switch (action.type) {
    case ADD_TO_TASKLIST: {
      return {
        ...state,
        tasklist: [
          ...state.tasklist,
          { title: action.payload, id: state.tasklist.length + 1 },
        ],
      };
    }
    case ADD_TASK_TO_TASKLIST: {
      console.log(action.payload);
      return {
        ...state,
        tasksOfTaskList: [
          ...state.tasksOfTaskList,
          {
            taskTitle: action.payload.taskTitle,
            taskDetail: action.payload.taskDetail,
            date: action.payload.date,
            id: action.payload.id,
          },
        ],
      };
    }

    default:
      return state;
  }
};

export { tasksReducer };
