import React from 'react';
import { Row, Card, Button, ListGroup, Alert, Container } from 'react-bootstrap';
// import freeShipping from '../assets/free-shipping.svg';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './ProductDetail.css';

const ProductDetail = ({ details, handleGoBack }) => {
    return (
        <>
            <Container fluid className='product-details px-5 mt-5'>
                <Card className='card-product-details'>
                    <Card.Header as="h5">{details.product_name}</Card.Header>
                    <Card.Body>
                        <Row>
                            <div className="col-4 align-self-center">
                                <Card.Img
                                    fluid
                                    className='product-image'
                                    src={details.image}
                                /> 
                            </div>
                            <div className="col-8">
                                <Card.Title className='fs-4'>Overview</Card.Title>
                                <Card.Text>
                                    {details.description}
                                </Card.Text>
                                <Card.Text>
                                    Brand: {details.brand}
                                </Card.Text>
                                <Card.Title className='fs-4' id='product-price'>${details.price} MXN</Card.Title>
                                <Card.Title className='fs-4'>Free shipping!</Card.Title>
                                <Card.Text>
                                    <i className="bi bi-truck" style={{color: 'rgb(0, 10, 59)', fontSize: '20px'}}></i>
                                    Estimated delivery on <b>Dec 16</b>
                                </Card.Text>
                                <Row>
                                    <div className="col-12 align-self-end">
                                        <Button variant="danger" size='sm'>Buy now</Button>{' '}
                                        <Button variant='warning' size='sm'>Add to cart</Button>{' '}
                                    </div>
                                </Row>
                            </div>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
};

export default ProductDetail;