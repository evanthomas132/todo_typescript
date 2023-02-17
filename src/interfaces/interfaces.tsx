
//interface for structure of Todo: Array
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

//interface for the props needed for the TodoList 

export interface TodoListProps {
  todos: Todo[];
}

//interface for the actions needed for the reducer in the reducer folder

export interface Action {
  type: "ADD_TODO" | "TOGGLE_TODO" | "DELETE_TODO";
  payload: {
    id: number;
    text?: string;
    completed?: boolean
  };
}
