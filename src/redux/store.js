import { createStore, combineReducers } from "redux";
// import {
//   addTodo,
//   deleteTodo,
//   setVisibilityFilter,
//   toggleTodo,
// } from "./actionCreators";
// import { visibilityFilter } from "./actionTypes";
import { todoReducer, visibilityFilterReducer } from "./reducers";

const store = createStore(
  combineReducers({ todoReducer, visibilityFilterReducer })
);

export default store;

//Now all our work is done all we have to do now is to dispatch actions..
/* 
// we can test our code without react

console.log("Initial State: ", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log(`Updated State: ${store.getState()}`);
});

//Dispatch actions:

store.dispatch(addTodo("Wake Up early"));
store.dispatch(addTodo("Let's go GYM"));
store.dispatch(addTodo("Protein BreakFast"));
store.dispatch(addTodo("learn redux"));

store.dispatch(toggleTodo(2));
store.dispatch(toggleTodo(3));

store.dispatch(deleteTodo(3));

store.dispatch(setVisibilityFilter(visibilityFilter.SHOW_COMPLETED));

unsubscribe();
 */
