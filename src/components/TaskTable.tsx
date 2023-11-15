import { useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';



type ToDoDisplayProps = {
    toDos:string[]
    handleDeleteClick: (task:string) => void
    editTask: (index:number, newTask:string) => void
}

export default function TaskTable({toDos, handleDeleteClick, editTask}: ToDoDisplayProps) {
    console.log(toDos);

    // const [editFormId, setEditFormId] = useState<number|null>(null)
    // const [editedTask, setEditedTask] = useState<string>('')

    return (
        <>
        <h1 className='text-center mt-3'>TO DO LIST</h1>
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Task</th>
                </tr>
            </thead>
            <tbody>
                {toDos.map((task, index) => (
                    <tr key={task}>
                        <td>{index + 1}</td>
                        <td><span>{task}</span></td>
                        <Button></Button>
                        <Button className="ms-3" value={task} variant="outline-danger" type='submit' onClick={() => handleDeleteClick(task)}>Delete</Button>
                    </tr>
                ))}
            </tbody>
        </Table>
        </>
    );
}
