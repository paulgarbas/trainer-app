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
                    <Link to='/new-client'>
                        <Button color='primary' className='dashboardBtn'>Naujas klientas</Button>
                    </Link>
                </Col>
                <Col>
                    <Link to='/existing-client'>
                        <Button color='primary' className='dashboardBtn'>Egzistuojantis klientas</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
        <Footer />
    </Auxiliary>
)

export default dashboard;