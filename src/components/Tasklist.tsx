import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import TaskTable from './TaskTable';

type ToDoFormProps = {
    handleSubmit: (e:React.FormEvent) => void,
    toDos:string[]
}

export default function Tasklist({handleSubmit,toDos}:ToDoFormProps) {



    return (
        <>
        <Card className='my-3'>
            <Card.Body>
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
            </Card.Body>
        </Card>
        <TaskTable toDos={toDos} />
        </>
    );
}