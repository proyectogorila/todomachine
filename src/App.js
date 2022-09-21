import react from "react";
import { DivPrincipal } from "./DivPrincipal";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch.js";
import { TodoList } from "./TodoList.js";
import { TodoItem } from "./TodoItem.js";
import { CreateTodoButtom } from "./CreateTodoButton.js";
import "./app.scss";

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tormar el curso de intro a react", completed: false },
  { text: "Llorar con la llorona", completed: false },
  { text: "Nuevo Todo", completed: false },
  { text: "Nuevo Todo de nuevo nuevo", completed: true },
];

function App() {
  const [todos, setTodos] = react.useState(defaultTodos);
  const [searchValue, setSearchValue] = react.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }) 
  };

  const completeTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    
    const newTodos = [...todos];

    newTodos[todoIndex].completed = true;

    setTodos(newTodos);
  };


  return (
    <react.Fragment>
      <DivPrincipal>
        <TodoCounter total={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
        <TodoList>
          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={()=> completeTodos(todo.text)}
            />
          ))}
        </TodoList>
        <CreateTodoButtom />
      </DivPrincipal>
    </react.Fragment>
  );
};

export default App;
