import { useState } from "react";
import Tasklist from "../components/Tasklist";



export default function Home() {

    const [todos, setTodos] = useState<string[]>([]);

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        let form = event.target as HTMLFormElement;
        let task =  form.task.value
        setTodos([...todos, task])
        form.task.value = ''
    }

    const deleteTodo = (task:string) => {
        setTodos(todos.filter(todo => todo !== task))
    }

    const editTodo = (task:string, index:number) => {
        setTodos(todos.map((todo, idx) => index==idx? task:todo))
    }

    return (
        <>
        <Tasklist todos={todos} handleSubmit={handleFormSubmit} deleteTodo={deleteTodo} editTodo={editTodo}/>
        </>
    )
}