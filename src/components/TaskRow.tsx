import { useState } from 'react';

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

type Props = {
    task: string, index: number
    deleteTodo: (task: string) => void
    editTodo: (task:string, index:number) => void
}

export default function TaskRow({ task, index, deleteTodo, editTodo }: Props) {
    const [show, setShow] = useState(false);
    const [editedTask, setEditedTask] = useState(task);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setEditedTask(e.target.value)
    }

    return (
        <>
            <tr key={task}>
                <td>{index + 1}</td>
                <td>{task}
                    <Button onClick={handleShow} className='ms-3' value={task} variant="primary" type="submit" >Edit</Button>
                    <Button onClick={() => deleteTodo(task)} className='ms-3' value={task} variant='danger' type="submit">
                        Delete</Button>
                </td>
            </tr>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{task}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control onChange={handleInputChange} name="editedTask" value={editedTask}/>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => editTodo(editedTask, index)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}