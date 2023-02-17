

//Component for inputting a new Todo which will rendering out a new Todo byt invoking the TodoClass class in the class folder

import React, { useEffect, useMemo, useReducer, useState } from "react";
import "./todo_input.css";
import { TodoListProps} from "../../interfaces/interfaces";
import {Todo}from '../../interfaces/interfaces'
import { todoReducer } from "../../reducer/Reducer";
import { TodoClass } from "../../class/TodoClass";
import TodoForm from "../TodoList/TodoList";
import { motion } from "framer-motion";
import {selectedOption} from '../../enums/enums'
import { inputAnimation } from "../../framer_motion/framer_motion";

function TodoInput({ todos }: TodoListProps) {
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedTodo, setSelectedTodo] = useState<string>("all");

  const [state, dispatch] = useReducer(todoReducer, todos, () => {
    const localData = localStorage.getItem("todos");
    return localData ? JSON.parse(localData) : [];
  });

  const filterTodos = (todos: Todo[], selectedTodo: string): Todo[] => {
    if (selectedTodo === "completed") {
      return todos.filter((todo) => todo.completed);
    } else if (selectedTodo === "incomplete") {
      return todos.filter((todo) => !todo.completed);
    } else {
      return todos;
    }
  };

 const filteredTodos = useMemo(() => {
  return filterTodos(state, selectedTodo)
 }, [state, selectedTodo])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state));
  }, [state]);

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    const newTodo = new TodoClass (inputValue, Math.round(Math.random() * 1000), false)
    dispatch({type: "ADD_TODO", payload: newTodo})
    setInputValue("");
  };

  return (
    <motion.div
      className="todo_input"
      variants={inputAnimation}
      initial="initial"
      animate="animate"
    >
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="What's the plan...?"
        />
      </form>
      <select
        defaultValue={selectedOption.ALL}
        onChange={(e) => setSelectedTodo(e.target.value)}
      >
        <option value={selectedOption.ALL}>All</option>
        <option value={selectedOption.COMPLETED}>Completed</option>
        <option value={selectedOption.INCOMPLETE}>Incomplete</option>
      </select>
      <TodoForm todos={filteredTodos} dispatch={dispatch} />
    </motion.div>
  );
}

export default TodoInput;
