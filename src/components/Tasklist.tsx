import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import TaskTable from './TaskTable';

type ToDoFormProps = {
    handleSubmit: (e:React.FormEvent) => void,
    toDos:string[]
}

export default function Tasklist({handleSubmit,toDos}:ToDoFormProps) {



    return (
        <>
        <Form onSubmit={handleSubmit}>
            <Form.Label id="form-task" htmlFor="task">Task</Form.Label>
            <Form.Control
                type="text"
                placeholder='Enter a task'
                name="task"
            />
            <br />
            <Button id='' variant="dark" type="submit" value="Submit">Add Task</Button>{' '}
        </Form>
        <TaskTable toDos={toDos} />
        </>
    );
}