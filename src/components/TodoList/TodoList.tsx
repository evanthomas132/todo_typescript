//Component for rendering out the list of todos, includes deleting and toggle todo function from the useReducer

import { Todo } from "../../interfaces/interfaces";
import "./todo_list.css";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Tooltip } from "@mui/material";
import React from "react";
import { Action } from "../../interfaces/interfaces";

type TodoFormProps = {
  todos: Todo[];
  dispatch: React.Dispatch<Action>;
};

const TodoForm = ({ todos, dispatch }: TodoFormProps) => {
  const handleDelete = (id: number) => {
    dispatch({
      type: "DELETE_TODO",
      payload: { id },
    });
  };

  const toggleTodo = (id: number) => {
    dispatch({ type: "TOGGLE_TODO", payload: { id } });
  };

  return (
    <div className={"todo_form"}>
      <ul>
        {todos.map((todo) => (
          <div className="todo_items" key={todo.id}>
            <li
              key={todo.id}
              onClick={() => toggleTodo(todo.id)}
              className={!todo.completed ? "todo_item" : "todo_item_completed"}
            >
              {todo.text}
            </li>
            <Tooltip title="delete" onClick={() => handleDelete(todo.id)}>
              <IconButton>
                <CloseIcon className="delete_icon" />
              </IconButton>
            </Tooltip>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoForm;
