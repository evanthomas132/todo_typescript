

//useReducer for adding a todo, toggling the completed state of the todo and deleting a todo

import { Todo, Action } from "../interfaces/interfaces";
export const todoReducer = (state: Todo[], action: Action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: Math.round(Math.random() * 1000),
          text: action.payload?.text ?? "",
          completed: false,
        },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) => {
        if (todo.id === action.payload?.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload?.id);
    default:
      return state;
  }
};
