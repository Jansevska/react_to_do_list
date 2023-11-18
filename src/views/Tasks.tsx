import { useState } from "react";
import Tasklist from "../components/Tasklist";
import CategoryType from "../types/category";

type TasksProps = {
    flashMessage:(newMessage:string|null, newCategory:CategoryType|null) => void
}

export default function Tasks({flashMessage}:TasksProps) {

    const [todos, setTodos] = useState<string[]>([]);

    const addTodo = (event: React.FormEvent) => {
        event.preventDefault();
        let form = event.target as HTMLFormElement;
        let task =  form.task.value as string;
        setTodos([...todos, task])
        form.task.value = '';
        flashMessage('Task Added', 'success')
    }

    const deleteTodo = (task:string) => {
        setTodos(todos.filter(todo => todo !== task))
        flashMessage(`${task} is deleted`, 'danger')
    }

    const editTodo = (task:string, index:number) => {
        setTodos(todos.map((todo, idx) => index==idx? task:todo))
        flashMessage('Task edited', 'info')
    }

    return (
        <>
        <Tasklist addTodo={addTodo} todos={todos} deleteTodo={deleteTodo} editTodo={editTodo}/>
        </>
    )
}