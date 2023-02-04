export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const addTodo = (id, todo) => ({
  type: ADD_TODO,
  payload: { id, task: todo },
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id,
});