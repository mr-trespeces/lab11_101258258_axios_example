import React, { Component } from 'react'
import axios from 'axios'
import { ListGroup, ListGroupItem, Container, Row, Col, Image, Button } from 'react-bootstrap'

export default class PersonList extends Component {

    constructor(props) {
        super(props)
    
        //Define state default values
        this.state = {
            persons: []
        }
    }

    // Component Lifecycle Callback
    componentDidMount() {
        this.getPersonList()
    }

    // Get Persons
    getPersonList = () => {
        axios.get(`https://randomuser.me/api/?results=10`)
        .then(res => {
            console.log(res.data.results)
            this.setState({ persons : res.data.results});
        })

    }
    
    render() {
        return (
        <div>
            {
                this.state.persons.map(person => (
                    <>
                    <ListGroup>
                        <ListGroupItem id="list" key={person.cell}>
                            <Row id="heading">
                                <h5>{person.name.first} {person.name.last} - <span id="id">{person.login.uuid}</span></h5>
                            </Row>                           
                            <Row>
                                <Container>
                                    <Row>
                                        <Col xs={1} md={1}>
                                            <Row>
                                                <Image id="image" src={person.picture.large} roundedCircle />
                                                <Button id="button">Details</Button>
                                            </Row>  
                                        </Col>                                          
                                        <Col xs={4} md={2} className="label" id="info">
                                            <div>User Name:</div>
                                            <div>Gender:</div>
                                            <div>Time Zone Desciption:</div>
                                            <div>Address:</div>
                                            <div>Email:</div>
                                            <div>Birthdate and Age:</div>
                                            <div>Register Date:</div>
                                            <div>Phone#:</div>
                                            <div>Cell#:</div>
                                        </Col>  
                                        <Col id="info">
                                            <div id="username">{person.login.username}</div>
                                            <div>{person.gender}</div>
                                            <div>{person.location.timezone.description}</div>
                                            <div>{person.location.street.number} {person.location.street.name}, {person.location.city}, {person.location.state}, {person.location.country} - {person.location.postcode} </div>
                                            <div>{person.email}</div>
                                            <div>{person.dob.date} ({person.dob.age})</div>
                                            <div>{person.registered.date}</div>
                                            <div>{person.phone}</div>
                                            <div>{person.cell}</div>
                                        </Col>       
                                    </Row>                             
                                </Container>        
                            </Row>
                        </ListGroupItem>
                    </ListGroup>
                    </>
                ))
            }
        </div>
    )}

}