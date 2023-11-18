import { useState } from "react";
import Tasklist from "../components/Tasklist";



export default function Tasks() {

    const [todos, setTodos] = useState<string[]>([]);

    const addTodo = (event: React.FormEvent) => {
        event.preventDefault();
        let form = event.target as HTMLFormElement;
        let task =  form.task.value
        setTodos([...todos, task])
        form.task.value = '';
    }

    const deleteTodo = (task:string) => {
        setTodos(todos.filter(todo => todo !== task))
    }

    // const deleteToDo = (taskToDelete: string) => {
    //     setToDos((prevToDos) => {
    //       return prevToDos.filter((task) => task !== taskToDelete);
    //     });
    //     alert("DELETED");
    //     // flashMessage('deleted')
    //   };


    const editTodo = (task:string, index:number) => {
        setTodos(todos.map((todo, idx) => index==idx? task:todo))
    }

    return (
        <>
        <Tasklist addTodo={addTodo} todos={todos} deleteTodo={deleteTodo} editTodo={editTodo}/>
        </>
    )
}