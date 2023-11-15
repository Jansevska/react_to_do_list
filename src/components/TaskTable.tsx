import { useState } from 'react'

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import TaskDisplay from '../views/TaskDisplay';


type ToDoDisplayProps = {
    toDos:string[],
    handleDeleteClick: (e.React.MouseEvent)
}

export default function TaskTable({toDos, handleDeleteClick}: ToDoDisplayProps) {
    console.log(toDos);

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
                        <td>{task}</td>
                        <Button onSubmit={handleDeleteClick} variant="outline-danger">Danger</Button>{' '}
                        {toDos.filter((task, index) => (
                            <tr key={task}>
                                <td>{index -1}</td>
                            </tr>
                        ))}
                    </tr>
                ))}
            </tbody>
        </Table>
        </>
    );
}
