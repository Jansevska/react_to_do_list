import { useState } from "react";

export default function Tasklist() {

    const [taskList, setTaskList] = useState<string>('sleep, eat, repeat')

    const tasklist = {
        name: 'Emili',
        task: 'make coffee',
    }

    return (
        <div>Tasklist</div>
    )
}
