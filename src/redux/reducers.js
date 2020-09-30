import {
  ADD_TODO,
  DELETE_TODO,
  SET_VISIBILITY_FILTER,
  TOGGLE_TODO,
  visibilityFilter,
} from "./actionTypes";
//Its time to create reducer...

// Global Application State:
const initialState = {
  visibilityFilter: visibilityFilter.SHOW_ALL,
  todos: [],
};

//Reducer For ADD ToDo
export const todoReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...prevState,
        todos: [
          ...prevState.todos,
          {
            text: action.text,
            completed: false,
          },
        ],
      };
    case TOGGLE_TODO:
      return {
        ...prevState,
        todos: prevState.todos.map((todo, index) => {
          if (index === action.index) {
            return {
              ...todo,
              completed: true,
            };
          }
          return {
            ...todo,
          };
        }),
      };
    case DELETE_TODO:
      return {
        ...prevState,
        todos: prevState.todos.filter((todo, index) => {
          if (index === action.index) {
            return false;
          }
          return true;
        }),
      };
    default:
      return prevState;
  }
};

//Reducer Function for setVisibilityFilter

export const visibilityFilterReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return {
        ...prevState,
        visibilityFilter: action.filter,
      };
    default:
      return prevState;
  }
};

//Now as our Reducers Function are ready let's create store..
