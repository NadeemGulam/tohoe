import "./App.css";
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import AddTodo from "./MyComponents/AddTodo";
import React, { useState, useEffect } from "react";

function App() {
  let intitTodo;
  if (localStorage.getItem("todos") === null) {
    intitTodo = [];
  } else {
    intitTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am OnDelete of todo", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.getItem("todos", JSON.stringify(todos));
  };
  const addTodo = (title, desc) => {
    console.log("I am adding this to do", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };
  const [todos, setTodos] = useState([intitTodo]);
  useEffect(() => {
    localStorage.getItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Header title="My Todos List" />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
