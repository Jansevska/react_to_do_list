
import Table from 'react-bootstrap/Table';
import TaskRow from './TaskRow';

type ToDoDisplayProps = {
    todos:string[]
    deleteTodo: (task:string) => void
    editTodo: (task:string, index:number) => void
}

export default function TaskTable({todos, deleteTodo, editTodo}: ToDoDisplayProps) {

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
                {todos.map((task, index) => (
                    <TaskRow key={task} task={task} index={index} deleteTodo={deleteTodo} editTodo={editTodo}/>
                ))}
            </tbody>
        </Table>
        </>
    );
}
