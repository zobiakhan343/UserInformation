import React, {useState} from "react";
import Axios from "axios";
import {
    Button,
    Card,
    Col,
    Container,
    Form,
    Row
} from "react-bootstrap";

const UserInformationForm = ({ isCloseForm }) => {
    const [form, setForm] = useState({});

    const handleForm = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.type === 'number' ? parseInt(e.target.value) : (e.target.value)
        })
    };

    const handleSubmitForm = e => {
        e.preventDefault();
        const request = Axios.post('http://localhost:3000/userInformation/', form );
        request.then(response => {
            const informations = response.data;
            setForm(informations);
            debugger;
        })
    };

    return (
        <Card style={{padding: '10px', margin: '10px 0 10px'}}>
                <Container fluid>
                    <Row className="justify-content-md-center">
                        <Col xs={6}>
                            <Form style={{marginTop: '20px'}} onSubmit={(e)=>handleSubmitForm(e)}>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="username"
                                        onChange={e => handleForm(e)}
                                        placeholder="Username"
                                    />
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
                                    <Form.Label>Mobile Number</Form.Label>
                                    <Form.Control type="number" name="mobileNo" onChange={e => handleForm(e)} placeholder="Mobile Number"/>
                                </Form.Group>
                                <Button variant="primary" type="submit" value="submit">Submit</Button>
                                <Button
                                    variant="outline-secondary"
                                    onClick={()=>isCloseForm(false)}
                                    style={{marginLeft:'10px'}}
                                >
                                    Cancel
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
        </Card>
    )
};

export default UserInformationForm;
