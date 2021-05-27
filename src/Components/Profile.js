import React, {useState} from "react"
import {Container, Row, Col, Form, Button, FormGroup, Label, Input, Alert} from 'reactstrap';
import Dez from "../Img/Profile.jpg"
import Data from "./Data";
import "../Css/Profile.css"


const Profile = () => {

    const [Myname, setMyname] = useState("Detch Dechaburapa")


    const [Name, setName] = useState(" ")
    const [Des, setDes] = useState(" ")
    const [Rating, setRating] = useState(" ")

    const [Arr, setArr] = useState([])

    const add = () => {
        setArr([...Arr, {Name: Name, Des: Des, Rating: Rating}])
        //alert("success!")
    }

    const edit = () => {
        document.getElementById("Input_N").disabled = false
        document.getElementById("myBtn").hidden = true
        document.getElementById("myBtn2").hidden = false
    }

    const comfirm = () => {
        document.getElementById("Input_N").disabled = true
        document.getElementById("myBtn").hidden = false
        document.getElementById("myBtn2").hidden = true
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
                            <Col><input type="text" id="Input_N" disabled={true} value={Myname}
                                        onChange={event => setMyname(event.target.value)}/></Col>
                            <Col>
                                <Button onClick={edit} id="myBtn">Edit</Button>
                                <Button onClick={comfirm} id="myBtn2" hidden={true}>Confirm</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="Description">
                                <p> นักศึกษามหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ <br/>
                                    ศึกษาอยู่คณะวิทยาศาตร์ประยุกต์ สาขาวิทยาการคอมพิวเตอร์<br/>
                                    ภาษาที่เขียนได้ HTML,JAVA,C++<br/>
                                    งานอดิเรกคือ ดูหนัง เล่นเกม ฟังเพลง<br/>
                                    สัตว์ที่ชอบ แมว<br/>
                                    คติประจำใจ: ทำวันนี้ให้ดีที่สุด</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                {/*Form/*/}
                <Row>
                    <Col>
                        <hr/><hr/>
                        <h3>My Project</h3>
                        {
                            Arr.map(project =>
                                <div className="Project">
                                    <p>Name: {project.Name}</p>
                                    <p>Description: {project.Des}</p>
                                    <p>Rating: {project.Rating}</p>
                                    <hr/>
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
                    <Button onClick={add} color="success">Submit</Button>
                </Form>
                <hr/><hr/>
            </Container>
            <div className="C2">
                <h3>API</h3>
                <Data/>
            </div>
        </div>

    );
}
export default Profile
