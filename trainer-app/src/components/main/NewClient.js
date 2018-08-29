import React, { Component } from 'react'; 
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Auxiliary from '../../hoc/Auxiliary';
import Header from '../Header';
import Footer from '../Footer';
import CameraLogo from './CameraLogo';
import Photo from './Photo';

class NewClient extends Component {

    state = {
        startCamera1: null,
        startCamera2: null        
    };

    clickHandler = (event) => {
        event.preventDefault();
        
        this.setState({
           [event.currentTarget.dataset.id]: true
        });
    }
  
    render() {
        return (
            <Auxiliary>
                <Header />
                <Container>
                    <Row>
                        <Col>
                            <Row>
                                <Col lg>
                                    <div className='photo'>  
                                        {this.state.startCamera1 ? <Photo /> :
                                            <CameraLogo
                                                id='startCamera1'
                                                clicked={this.clickHandler} />
                                        }
                                    </div>
                                </Col>
                                <Col lg>
                                    <div className='photo'>  
                                        {this.state.startCamera2 ? <Photo /> :
                                            <CameraLogo
                                                id='startCamera2'
                                                clicked={this.clickHandler} />
                                        }
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        
                        <Col>
                            <Form>                            
                                <FormGroup tag="fieldset">
                                    <Label for="exampleSex">Lytis</Label>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="woman" />{' '}
                                            Moteris
                                        </Label>
                                    </FormGroup>
                                    
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="man" />{' '}
                                            Vyras
                                        </Label>
                                    </FormGroup>
                                </FormGroup>
                                
                                <FormGroup>
                                    <Label for="exampleName">Vardas</Label>
                                    <Input type="text" name="name" id="exampleName" placeholder="Įveskite vardą" />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="exampleSurname">Pavardė</Label>
                                    <Input type="text" name="surname" id="exampleSurname" placeholder="Įveskite pavardę" />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="exampleDate">Gimimo data</Label>
                                    <Input type="date" name="date" id="exampleDate" placeholder="Įveskite gimimo datą" />
                                </FormGroup>
                                    
                                <FormGroup>
                                    <Label for="exampleHeight">Ūgis</Label>
                                    <Input type="number" name="height" id="exampleHeight" placeholder="Įveskite ūgį" />
                                </FormGroup>   
                                    
                                {/* <FormGroup>
                                    <Label for="exampleFile">File</Label>
                                    <Input type="file" name="file" id="exampleFile" />
                                    <FormText color="muted">
                                        This is some placeholder block-level help text for the above input.
                                        It's a bit lighter and easily wraps to a new line.
                                    </FormText>
                                </FormGroup> */}
                                                            
                                {/* <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" />{' '}
                                        Check me out
                                    </Label>
                                </FormGroup> */}
                                
                                <Button color='success'>Pridėti</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </Auxiliary>
        )
    }
}

export default NewClient;
