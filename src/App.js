import { useState, useRef } from "react";
import "./App.css";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";


const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },

  {
    id: 1,
    isDone: false,
    content: "빨래 널기",
    createdDate: new Date().getTime(),
  },

  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    createdDate: new Date().getTime(),
  },
];



function App() {
  console.log("1");
  const [todo, setTodo] = useState(mockTodo);
  console.log("2");
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      content: content,
      isDone: false,
      createdDate: new Date().getTime(),
    };

    setTodo([newItem, ...todo]);
    idRef.current += 1;
  };

  
  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate}/>
      <TodoList todo={todo}/>
    </div>
  );
}

export default App;