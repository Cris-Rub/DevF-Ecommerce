import React from 'react';
import { Row, Card, Button, ListGroup, Alert, Container } from 'react-bootstrap';
import freeShipping from '../assets/free-shipping.svg';

const ProductDetail = ({ details, handleGoBack }) => {
    return (
        <>
            <Container>
                <Row>
                    <div className="col-4 align-self-center">
                        <img className='img-fluid' src={details.image} />
                    </div>
                    <div className="col-8">
                        <Row>
                            <div className="col-12">
                                <h3>{details.product_name}</h3>
                                <p>{details.description}</p>
                                <h5>Marca: {details.brand}</h5>
                            </div>
                        </Row>

                        <Row>
                            <h4>Cuantity</h4>
                        </Row>
                        <Row>
                            <div className="col-3">
                                <img
                                    alt=""
                                    src={freeShipping}
                                    width="50"
                                    height="50"
                                    className="d-inline-block align-top"
                                />{' '}
                            </div>
                            <div className="col-9">
                                <p>
                                    Estimated delibery on <b>Dec 16</b> 
                                </p>
                            </div>
                                
                            
                        </Row>
                        <Row>
                            <div className="col-12">
                                <h1>
                                    Super deal <b>${details.price} MXN</b>
                                </h1>
                            </div>
                        </Row>
                        <Row>
                            <div className="col-12">

                                <Button variant="danger" size='lg'>Buy now</Button>{' '}
                                <Button variant='warning' size='lg'>Add to cart</Button>{' '}
                                <Button variant='warning' size='lg' onClick={handleGoBack}>Go back</Button>{' '}
                            </div>
                        </Row>
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default ProductDetail;