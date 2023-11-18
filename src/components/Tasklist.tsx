import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import TaskTable from './TaskTable';

type ToDoFormProps = {
    addTodo: (e:React.FormEvent) => void,
    todos:string[],
    deleteTodo: (task:string) => void
    editTodo: (task:string, index:number) => void
}

export default function Tasklist({addTodo, todos, deleteTodo, editTodo}:ToDoFormProps) {

    

    return (
        <>
        <Card className='my-5 bg-black'>
            <Card.Body>
                <Form onSubmit={addTodo}>
                    <Form.Label id="form-task" htmlFor="task">Task</Form.Label>
                    <Form.Control type="text" placeholder='Enter a task' name="task"/>
                    <br />
                    <Button id='' variant="dark" type="submit" value="Submit"> + Add Task</Button>{' '}
                </Form>
            </Card.Body>
        </Card>
        <TaskTable todos={todos} deleteTodo={deleteTodo} editTodo={editTodo}/>
        </>
    );
}