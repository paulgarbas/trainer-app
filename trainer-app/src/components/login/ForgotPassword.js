import React, { Component } from 'react';
import { Container, Form, FormGroup, Button, Label, Input } from 'reactstrap'; 
import axios from 'axios';
import Auxiliary from '../../hoc/Auxiliary';
import Footer from '../Footer';

class ForgotPassword extends Component {

    state = {
        email: ''
    };

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
        });        
    }

    submitHandler = (event) => {
        event.preventDefault();

        const loginData = {
            email: this.state.email
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
                            <Button type="submit" color='success'>Priminti</Button>
                        </FormGroup>
                    </Form>
                </Container>
                <Footer />  
            </Auxiliary>
        )
    }
}

export default ForgotPassword;

