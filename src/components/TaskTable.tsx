
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';



type ToDoDisplayProps = {
    toDos:string[]
}

export default function TaskTable({toDos}: ToDoDisplayProps) {
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
                        <td><span>{task}</span></td>
                        <Button></Button>
                        <Button className="ms-3" value={task} variant="outline-danger" type='submit'>Delete</Button>
                    </tr>
                ))}
            </tbody>
        </Table>
        </>
    );
}
