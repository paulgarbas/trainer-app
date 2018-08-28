import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, FormGroup, Button, Label, Input } from 'reactstrap'; 
import axios from 'axios';

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
            <Container>
                <Form horizontal onSubmit={this.submitHandler} >
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
                        <Label for="examplePassword">Password</Label>
                        <Input 
                            type="password" 
                            name="password" id="examplePassword" placeholder="Įveskite slaptažodį" 
                            value={this.state.username}
                            onChange={this.changeHandler} />
                    </FormGroup>
    
                    <FormGroup>
                        <Link to='/forgot'>
                            <Button type="submit">Pamiršau slaptažodį</Button>
                        </Link>                            
                    </FormGroup>
    
                    <FormGroup>                
                        <Button type="submit">Prisijungti</Button>
                    </FormGroup>
                </Form>
            </Container>
        )
    }
} 

export default LoginPage;