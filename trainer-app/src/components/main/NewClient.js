import React, { Component } from 'react'; 
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import moment from 'moment';
// import DatePicker from 'react-bootstrap-date-picker';
// import DayPickerInput from 'react-day-picker/DayPickerInput';
// import 'react-day-picker/lib/style.css';
// import MomentLocaleUtils, {
//     formatDate,
//     parseDate,
// } from 'react-day-picker/moment';
import DatePickerInput from '../helpers/DatePicker';
import 'moment/locale/lt';
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
                                    <div>
                                        <Label for="exampleDate">Amžius metais</Label> 
                                        <Input type="number" name="age" id="exampleage" placeholder="Įveskite amžių" />   
                                    </div>

                                    
                                    
                                    {/* <DatePickerInput /> */}
                                    {/* <DayPickerInput
                                        formatDate={formatDate}
                                        parseDate={parseDate}
                                        format="L"
                                        inputProps={{readOnly: true}} 
                                        placeholder={`${formatDate(new Date(), 'L', 'lt')}`}
                                        dayPickerProps={{
                                            locale: 'lt',
                                            localeUtils: MomentLocaleUtils,
                                        }}
                                    /> */}
                                </FormGroup>
                                    
                                <FormGroup>
                                    <Label for="exampleHeight">Ūgis</Label>
                                    <Input type="number" name="height" id="exampleHeight" placeholder="Įveskite ūgį" />
                                </FormGroup>                                
                                
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
