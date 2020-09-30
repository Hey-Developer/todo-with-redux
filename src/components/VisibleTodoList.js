import { toggleTodo, deleteTodo } from "../redux/actionCreators";
import { connect } from "react-redux";
import TodoList from "./TodoList";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_COMPLETED":
      return todos.filter((t) => t.completed);
    case "SHOW_ACTIVE":
      return todos.filter((t) => !t.completed);
    // the default is SHOW_ALL Case
    default:
      return todos;
  }
};

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(
      state.todoReducer.todos,
      state.visibilityFilterReducer.visibilityFilter
    ),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (index) => {
      dispatch(toggleTodo(index));
    },
    deleteTodo: (index) => {
      dispatch(deleteTodo(index));
    },
  };
};

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
