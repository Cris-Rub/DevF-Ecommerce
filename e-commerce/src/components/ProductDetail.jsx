import React from 'react';
import { Row, Card, Button, ListGroup, Alert, Container, Badge } from 'react-bootstrap';

const ProductDetail = ({ details }) => {
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
                                <h4>Marca: {details.brand}</h4>
                            </div>
                        </Row>
                        <Row>
                            <div className="col-12">
                                <h1>
                                    Super deal<Badge bg='danger'>{details.price}</Badge>
                                </h1>
                            </div>
                        </Row>
                        <Row>
                            <h4>Cuantity</h4>
                        </Row>
                        <Row>
                            <div className="col-12">
                                <h4>Free shipping</h4>
                                <p>
                                    Estimated delibery on <b>Dec 16</b> 
                                </p>
                            </div>
                        </Row>
                        <Row>
                            <div className="col-12">
                                <Button variant="danger" size='lg'>Buy now</Button>{' '}
                                <Button variant='warning' size='lg'>Add to cart</Button>{' '}
                                <Button variant='warning' size='lg' >Add to cart</Button>{' '}
                            </div>
                        </Row>
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default ProductDetail;