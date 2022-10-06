import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Navbar, Button, Form } from 'react-bootstrap';
import Logo from '../assets/Logo.svg';
import ShoppingCart from '../assets/shoppingCart.svg';
import './NavbarComponent.css';

const NavbarComponent = ({ results=[], search }) => {
    const [searchValue, setSearchValue] = useState();

    const handleSearchValue = (e) => {
        const {target: {value}} = e;
        setSearchValue(value.toLowerCase());
    };
    const submitSearch = (e) => {
        e.preventDefault();
        const resultado = results.filter(product => {
            const toSearch = product.product_name.toLowerCase(); 
            return toSearch == searchValue;
        });
        search(resultado);
        
    };

    return (
        <>
            <Navbar bg="dark" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand href="/home" className='fw-bold text-danger'>
                        {/* <Link to='/home'> */}
                        <img
                            alt=""
                            src={Logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                            One2Shop!
                        {/* </Link> */}
                    </Navbar.Brand>  
                    <Form className="d-flex form-inline mx-auto my-2">
                        <Form.Control
                            type="search"
                            placeholder="All what you want!"
                            className="me-2 align-center"
                            aria-label="Buscar"
                            name='searchValue'
                            onChange={handleSearchValue}
                        />
                        <Button
                            variant="outline-danger"
                            type='submit'
                            onClick={(e) => {
                                submitSearch(e);
                                // 
                            }}
                        >Search</Button>
                    </Form>
                    <Navbar.Brand href="/home" className='fw-bold text-danger'>
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