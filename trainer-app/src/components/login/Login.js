import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, FormGroup, Button, Label, Input } from 'reactstrap'; 
import axios from 'axios';
import Auxiliary from '../../hoc/Auxiliary';
import Footer from '../Footer';

class LoginPage extends Component {

    state = {
        email: '',
        password: ''
    };

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
        });        
    }

    submitHandler = (event) => {
        event.preventDefault();

        const loginData = {
            email: this.state.email,
            password: this.state.password
        }; 
        axios.post('https://test.com', loginData)
            .then(response => {
                console.log(response);
            }); 
    }

    render() {
        return (
            <Auxiliary>
                <Container>
                    <Form onSubmit={this.submitHandler} >
                        <FormGroup>
                            <Label for="exampleEmail">Elektroninis paštas</Label>
                            <Input 
                                type="email" 
                                name="email"
                                placeholder="Įveskite el. paštą"
                                value={this.state.email}
                                onChange={this.changeHandler} />
                        </FormGroup>
                        
                        <FormGroup>
                            <Label for="examplePassword">Slaptažodis</Label>
                            <Input 
                                type="password" 
                                name="password" id="examplePassword" placeholder="Įveskite slaptažodį" 
                                value={this.state.username}
                                onChange={this.changeHandler} />
                        </FormGroup>
        
                        <Row className='loginBtn'>
                            <Col>
                                <FormGroup>                
                                    <Button type="submit" color='success'>Prisijungti</Button>
                                </FormGroup>
                            </Col>

                            <Col>
                                <FormGroup  className='forgotBtn'>
                                    <Link to='/forgot'>
                                        <Button type="submit" color='danger'>Pamiršau slaptažodį</Button>
                                    </Link>                            
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </Container>
                <Footer />
            </Auxiliary>
        )
    }
} 

export default LoginPage;