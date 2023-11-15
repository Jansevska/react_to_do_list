import { useState } from "react";
import Tasklist from "../components/Tasklist";

export default function TaskDisplay() {

    const [toDos, setToDos] = useState<string[]>([]);
    const [deleteClick, setDeleteClick] = useState(false);

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        let form = event.target as HTMLFormElement;
        let task =  form.task.value
        setToDos([...toDos, task])
        form.task.value = ''
    }

    const handleDeleteClick = (event:React.MouseEvent<HTMLElement>):void => {
        let form = event.target as HTMLElement;
        let task = form.task.value
        setDeleteClick([...toDos, task])
        // Find the todo that was clicked (event.target)
        // filter the todos without that toDo
        // set the toDos to the new filtered array
    }

    return (
        <>
        <Tasklist toDos={toDos} handleSubmit={handleFormSubmit} handleDeleteClick={handleDeleteClick} />
        </>
    )
}
