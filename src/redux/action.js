import { ADD_TASK_TO_TASKLIST, ADD_TO_TASKLIST } from "./actionTypes";

export const addToTaskList = (taskTitle) => {
  return {
    type: ADD_TO_TASKLIST,
    payload: taskTitle,
  };
};
export const addTaskToTaskList = (tasks) => {
  return {
    type: ADD_TASK_TO_TASKLIST,
    payload: tasks,
  };
};
