import React, {useState} from "react"
import {Container, Row, Col, Form, Button, FormGroup, Label, Input, Alert} from 'reactstrap';
import Dez from "../Img/Profile.jpg"
import "../Css/Profile.css"


const Profile = () => {

    const [Firstname, setFirstname] = useState("Detch")
    const [Lastname, setLastname] = useState("Dechaburapa")

    const [Name, setName] = useState(" ")
    const [Des, setDes] = useState(" ")
    const [Rating, setRating] = useState(" ")

    const [Arr, setArr] = useState([])
    const x =
    const add = () => {
        setArr([...Arr,{Name: Name, Des: Des, Rating: Rating}])
        alert("success!")
    }


    return (
        <div className="all">
            <Container className="C1">
                <Row>
                    <h1>Welcome to My Profile</h1>
                </Row>
                <Row>
                    <Col xs="auto"><img src={Dez} width="300px" height="300px"/></Col>
                    <Col>
                        <Row>
                            <Col>Name: {Firstname} {Lastname}</Col>
                        </Row>
                        <Row>
                            <Col>
                                <h5>ประวัติ</h5>
                                <p>ชอบแมว</p>
                                <p>ชอบแมว</p>
                                <p>ชอบแมว</p>
                                <p>ชอบแมว</p>
                                <p>ชอบแมว</p>
                                <p>ชอบแมว</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                {/*Form/*/}
                <Row>
                    <Col>
                        {console.log(Arr)}
                        {
                            Arr.map(project =>
                                <div>
                                    <p>{project.Name}</p>
                                    <p>{project.Des}</p>
                                    <p>{project.Rating}</p>
                                </div>
                            )
                        }
                    </Col>
                </Row>
                <Form>
                    <FormGroup>
                        <Label>Project Name</Label>
                        <Input type="name" id="name" onChange={event => setName(event.target.value)}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Description</Label>
                        <Input type="textarea" id="description" onChange={event => setDes(event.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Rating</Label>
                        <Input type="select" id="rating" onChange={event => setRating(event.target.value)}>
                            <option>Select Rating</option>
                            <option>⭐</option>
                            <option>⭐⭐</option>
                            <option>⭐⭐⭐</option>
                            <option>⭐⭐⭐⭐</option>
                            <option>⭐⭐⭐⭐⭐</option>
                        </Input>
                    </FormGroup>
                    <Button onClick={add}>Submit</Button>
                </Form>
            </Container>
        </div>

    );
}
export default Profile
