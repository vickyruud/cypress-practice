import { TodoForm } from "../components/TodoForm";

export default function Home() {
  return (
    <div className=" flex flex-col justify-center items-center gap-5 text-center">
    <h1 className="text-3xl text-teal-800 font-bold ">
      Todo App!
      </h1>
      <TodoForm/>
    </div>
  )
}