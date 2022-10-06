import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Navbar, Nav, Button, Form } from 'react-bootstrap';
import Logo from '../assets/Logo.svg';
import ShoppingCart from '../assets/shoppingCart.svg';
import './NavbarComponent.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

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
                <Container className='fs-3'>
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
                    <Nav className='justify-content-end fs-4'>
                        <Nav.Link href='/login' className='text-light'>Log in</Nav.Link>
                        <a className="nav-link" href="/home">
                            <i className="bi bi-person-circle" style={{color: 'rgb(220, 53, 69)'}}></i>             
                        </a>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default NavbarComponent;