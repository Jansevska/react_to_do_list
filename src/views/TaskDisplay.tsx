import { useState } from "react";
import Tasklist from "../components/Tasklist";

export default function TaskDisplay() {

    const [toDos, setToDos] = useState<string[]>([]);

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        let form = event.target as HTMLFormElement;
        let task =  form.task.value
        setToDos([...toDos, task])
        form.task.value = ''
    }

    return (
        <>
        <Tasklist toDos={toDos} handleSubmit={handleFormSubmit} />
        </>
    )
}
