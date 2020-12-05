import { ADD_TO_TASKLIST } from "./actionTypes";

export const addToTaskList = (taskTitle) => {
  return {
    type: ADD_TO_TASKLIST,
    payload: taskTitle,
  };
};
