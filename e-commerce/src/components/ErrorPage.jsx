import React, { useState } from 'react';
import { Container, Navbar, Button, Card } from 'react-bootstrap';
import Logo from '../assets/Logo.svg';
import './ErrorPage.css';

const ErrorPage = () => {
    return (
        <>
            <Navbar bg="dark" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand href="/home" className='fw-bold text-danger'>
                        <img
                            alt=""
                            src={Logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                            One2Shop!
                    </Navbar.Brand>  
                </Container>
            </Navbar>
            <Container className='container-error px-5 mt-5 mb-5'>
                <Card className='card-error'>
                    <Card.Title><h1 className='fw-bold' style={{fontSize: '25px'}}>Page Not Found</h1></Card.Title>
                    <Card.Body>
                        <p>
                            It looks like the page you are looking for doesn't exist.
                        </p>
                        <p>
                            Don't worry, 
                        </p>
                        <a href="/home">let's go back to our site</a>
                    </Card.Body>
                </Card>
            </Container>
            <Navbar bg="dark" expand="lg" fixed="bottom">
                <Container>
                    <Navbar.Brand className='fw-bold text-secondary'>
                        One2Shop!, 2022 rights reserved. Cristopher Rubio.
                    </Navbar.Brand> 
                </Container> 
            </Navbar>
        </>
    );
};

export default ErrorPage;