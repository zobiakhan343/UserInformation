import React, {useEffect, useState} from "react";
import {Button, Col, Container, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import Axios from "axios";
import Card from "react-bootstrap/Card";
import UserInformationForm from "./componentModals/userInformationForm";
import UserInformationEdit from "./componentModals/userInformationEdit";

const UserInformation = () => {
    const [information, handleData] = useState([]);
    const [visibleForm, handleVisibleForm] = useState(false);
    const [editForm, handleEditForm] = useState(false);

    useEffect(() => {
        const request = Axios.get('http://localhost:3000/userInformation');
        request.then(response => {
            handleData(response.data);
        });
    }, []);

    const handleDelete = (id) => {
        Axios.delete(`http://localhost:3000/userInformation/${id}`);
    };

    return (
            <Container>
                <Row>
                    <Col>
                        {visibleForm ?
                            <UserInformationForm isCloseForm={handleVisibleForm}/>
                        :
                            <Col>
                            <Button onClick={() => handleVisibleForm(true)}>Add Information</Button>
                            </Col>
                        }
                        <div>
                            <Row>
                                {information.map((userInfo) => {
                                    return (
                                        <Col xs={4} style={{marginBottom: '10px'}}>
                                            <Card>
                                                <Card.Header as="h5">User Information</Card.Header>
                                                <ListGroup className="list-group-flush">
                                                    <div>
                                                        <ListGroupItem>Username: {userInfo.username}</ListGroupItem>
                                                        <ListGroupItem>Email: {userInfo.email}</ListGroupItem>
                                                        <ListGroupItem>Address: {userInfo.address}</ListGroupItem>
                                                        <ListGroupItem>Mobile: {userInfo.mobileNo}</ListGroupItem>
                                                    </div>
                                                </ListGroup>
                                                <Card.Body>
                                                    <Button variant="link" onClick={()=>handleEditForm(true)}>Edit</Button>
                                                    <Button variant="link" onClick={()=>handleDelete(userInfo.id)}>Delete</Button>
                                                </Card.Body>
                                                <UserInformationEdit id={userInfo.id} show={editForm} isClose={handleEditForm}/>
                                            </Card>
                                        </Col>
                                    )}
                                )}
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
    );
};
export default UserInformation;
