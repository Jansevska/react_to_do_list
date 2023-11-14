import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


export default function Tasklist() {

    return (
        <>
            <Form.Label id="form-name" htmlFor="inputPassword5">Name</Form.Label>
            <Form.Control
                type="text"
            />
            <br />
            <Form.Label id="form-task" htmlFor="inputPassword5">Task</Form.Label>
            <Form.Control
                type="text"
            />
            <br />
            <Button as="input" variant="dark" type="submit" value="Submit" />{' '}
        </>
    );
}