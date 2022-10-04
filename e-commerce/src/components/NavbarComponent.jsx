import React from 'react';
import { Container, Navbar, Button, Form } from 'react-bootstrap';
// import Image from 'react-bootstrap/Image';

import Logo from '../assets/Logo.svg';
import ShoppingCart from '../assets/shoppingCart.svg';

import './NavbarComponent.css';

const NavbarComponent = () => {
    return (
        <>
            <Navbar bg="light" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand href="#home" className='fw-bold text-danger'>
                        <img
                            alt=""
                            src={Logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                    One2Shop!
                    </Navbar.Brand>  
                    <Form className="d-flex form-inline mx-auto my-2">
                        <Form.Control
                            type="search"
                            placeholder="All what you want!"
                            className="me-2 align-center"
                            aria-label="Buscar"
                        />
                        <Button variant="outline-danger">Search</Button>
                    </Form>
                    <Navbar.Brand href="#home" className='fw-bold text-danger'>
                        <img
                            alt=""
                            src={ShoppingCart}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>  
                </Container>
            </Navbar>
            {/* <Image
                src='https://ae01.alicdn.com/kf/S1c2813a3043f4b76afe2da7e797813557.jpg_Q90.jpg_.webp'
                height='100'
            /> */}
        </>
    );
};

export default NavbarComponent;