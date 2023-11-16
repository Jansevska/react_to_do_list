
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';



type ToDoDisplayProps = {
    toDos:string[]
}

export default function TaskTable({toDos}: ToDoDisplayProps) {
    

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
                        <td>{task}
                        <Button className='ms-3' value={task} variant="outline-primary" type="submit" >Edit</Button>
                        <Button className='ms-3' value={task} variant='outline-danger' type="submit">
                            Delete</Button> 
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
        </>
    );
}
