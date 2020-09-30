//Our action creators

import {
  ADD_TODO,
  DELETE_TODO,
  SET_VISIBILITY_FILTER,
  TOGGLE_TODO,
} from "./actionTypes";

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};

export const toggleTodo = (index) => {
  return {
    type: TOGGLE_TODO,
    index,
  };
};

export const deleteTodo = (index) => {
  return {
    type: DELETE_TODO,
    index,
  };
};

export const setVisibilityFilter = (filter) => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter,
  };
};
