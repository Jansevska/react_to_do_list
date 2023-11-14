import Table from 'react-bootstrap/Table';

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
                        <td>{task}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
        </>
    );
}
