import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap'; 
import Auxiliary from '../../hoc/Auxiliary';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

const dashboard = () => (
    <Auxiliary>      
        <Header />
        <Container>            
            <Row className='dashboard'>
                <Col>
                    <Link to='/newClient'>
                        <Button bsStyle='success'>Naujas klientas</Button>
                    </Link>
                </Col>
                <Col>
                    <Link to='/existingClient'>
                        <Button bsStyle='success'>Egzistuojantis klientas</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
        <Footer />
    </Auxiliary>
)

export default dashboard;