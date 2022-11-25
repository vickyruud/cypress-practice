import { useState } from "react";

import { TodoForm } from "../components/TodoForm";

import { v4 as uuidv4 } from 'uuid';


export default function Home() {

  const [todos, setTodos] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value)
    const newTodo = {
      id: uuidv4(),
      text: e.target[0].value
    }
    setTodos((prev) => [...prev, newTodo]);
  }
  return (
    <div className=" flex flex-col justify-center items-center gap-5 text-center">
    <h1 className="text-3xl text-teal-800 font-bold ">
      Todo App!
      </h1>
      <TodoForm handleSubmit={handleSubmit} />
    </div>
  )
}