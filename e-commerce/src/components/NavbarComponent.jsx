import React, { useState } from 'react';
import { Container, Navbar, Button, Form } from 'react-bootstrap';
import Logo from '../assets/Logo.svg';
import ShoppingCart from '../assets/shoppingCart.svg';

import './NavbarComponent.css';

const NavbarComponent = () => {
    const [searchValue, setSearchValue] = useState({});

    const handleSearchValue = (e) => {
        const {target: {name, value}} = e;
        setSearchValue({ ...searchValue, [name]: value});
    };

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
                            name='searchValue'
                            value={searchValue.searchValue || ''}
                            onChange={handleSearchValue}
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
        </>
    );
};

export default NavbarComponent;