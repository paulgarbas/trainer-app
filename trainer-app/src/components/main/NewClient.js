import React, { Component } from 'react'; 
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Auxiliary from '../../hoc/Auxiliary';
import Header from '../Header';
import Footer from '../Footer';
import CameraLogo from './CameraLogo';
import TakePhoto from './TakePhoto';

class NewClient extends Component {

    state = {
        startCamera1: null,
        startCamera2: null,
        loading: false,
        firstPhotoWasTaken: false,
        secondPhotoWasTaken: false
    };

    clickCameraLogoHandler = (event) => {
        event.preventDefault();
        
        this.setState({
           [event.currentTarget.dataset.id]: true,
           loading: true
        });
    }
  
    // clickCameraHandler = (dataFromChild) => {
    //     this.setState({
    //         [dataFromChild[0]]: dataFromChild[1]
    //     });
    // }
  
    render() {
        return (
            <Auxiliary>
                <Header />
                <Container>
                    <Row>
                        <Col>
                            <Row>
                                <Col lg className='photoFrame__wrapper'>
                                    <div className='photoFrame'>  
                                        {this.state.startCamera1 ? 
                                        <TakePhoto 
                                            // cameraWasClicked={this.clickCameraHandler}
                                            id='firstPhotoWasTaken' /> :
                                                <CameraLogo
                                                    id='startCamera1'
                                                    clicked={this.clickCameraLogoHandler} />
                                        }
                                    </div>
                                </Col>
                                
                                <Col lg className='photoFrame__wrapper'>
                                    <div className='photoFrame'>  
                                        {this.state.startCamera2 ? 
                                        <TakePhoto 
                                            // cameraWasClicked={this.clickCameraHandler}
                                            id='secondPhotoWasTaken' /> :
                                                <CameraLogo
                                                    id='startCamera2'
                                                    clicked={this.clickCameraLogoHandler} />
                                        }
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        
                        <Col>
                            <Form>                            
                                <FormGroup>
                                    <Label for="exampleSex">Lytis</Label>
                                    <Input type="select" name="select" id="exampleSex">
                                        <option>Moteris</option>
                                        <option>Vyras</option>
                                    </Input>
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
