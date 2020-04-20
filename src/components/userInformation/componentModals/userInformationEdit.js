import React, {useState} from "react";
import Axios from "axios";
import {
    Button, Form, Modal,
} from "react-bootstrap";

const UserInformationEdit = ({ show, isClose, id }) => {
    const [form, setForm] = useState({});

    const handleForm = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.type === 'number' ? parseInt(e.target.value) : (e.target.value)

        });
    };

    const handleSubmitForm = e => {
        e.preventDefault();
        const request = Axios.patch(`http://localhost:3000/userInformation/${id}`, form );
        request.then(response => {
            const informations = response.data;
            setForm(informations);
            debugger;
        })
    };

    return (
        <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            show={show}
            onHide={()=>isClose(false)}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Update User Information
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form style={{marginTop: '20px'}} >
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" name="username" onChange={e => handleForm(e)} placeholder="Username" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" onChange={e => handleForm(e)} placeholder="name@example.com"/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" name="address" onChange={e => handleForm(e)} placeholder="Address"/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control type="number" name="mobileNo" onChange={e => handleForm(e)} placeholder="Mobile Number"/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={(e)=>handleSubmitForm(e)} type="submit" value="submit">Save Changes</Button>
                <Button variant="outline-secondary" onClick={()=>isClose(false)}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
};

export default UserInformationEdit;
