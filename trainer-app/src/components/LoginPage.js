import React, { Component } from 'react';
import { Grid, Form, FormGroup, Col, controlLabel, Formcontrol, ControlLabel, FormControl, Checkbox, Button } from 'react-bootstrap'; 

class LoginPage extends Component {

    state = {
        email: '',
        password: ''
    };

    changeHandler = (event) => {
        console.log(event.target.name);
        this.setState({
            // name: event.target.value,
            // email: event.target.value,
            // password: event.target.value
            [event.target.name]: event.target.value 
        });        
    }

    render() {
        return (
            <Grid>
                <Form horizontal>
                    <FormGroup controlId="formHorizontalName">
                        <Col componentClass={ControlLabel} sm={2}>
                            Vardas
                        </Col>
                        <Col sm={10}>
                            <FormControl 
                                type="name" 
                                name="name"
                                placeholder="Įveskite vardą" 
                                value={this.state.name}
                                onChange={event => this.changeHandler(event)} />
                        </Col>
                    </FormGroup>
    

                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            Elektroninis paštas
                        </Col>
                        <Col sm={10}>
                            <FormControl 
                                type="email" 
                                name="email"
                                placeholder="Įveskite el. paštą" 
                                value={this.state.email}
                                onChange={this.changeHandler} />
                        </Col>
                    </FormGroup>
    
                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                            Slaptažodis
                        </Col>
                        <Col sm={10}>
                            <FormControl 
                                type="password" 
                                name="password"
                                placeholder="Įveskite slaptažodį" 
                                value={this.state.username}
                                onChange={this.changeHandler} />
                        </Col>
                    </FormGroup>
    
                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Checkbox>Atsiminti mane</Checkbox>
                        </Col>
                    </FormGroup>
    
                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type="submit">Prisijungti</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Grid>
        )
    }
} 

export default LoginPage;