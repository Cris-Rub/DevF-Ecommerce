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
                                    // height={250}
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

                                {/* <Row>
                                    <div className="col-12">
                                        <p>{details.description}</p>
                                        <p>{details.brand}</p>
                                    </div>
                                </Row>
                                <Row>
                                    <div className="col-12 ">
                                        <p className='title'>Free shipping!</p>
                                        <p>
                                            <i className="bi bi-truck"></i>
                                            Estimated delivery on <b>Dec 16</b>
                                        </p>
                                        <br />
                                    </div>
                                </Row>
                                <Row>
                                    <div className="col-12 align-self-end">
                                        <Button variant="danger" size='sm'>Buy now</Button>{' '}
                                        <Button variant='warning' size='sm'>Add to cart</Button>{' '}
                                    </div>
                                </Row> */}
                            </div>
                            
                            {/* <Card.Title>{details.brand}</Card.Title> */}
                        </Row>
                    </Card.Body>
                </Card>
                {/* <Row>
                    <div className="col-4 align-self-center">
                        <img className='img-fluid' src={details.image} />
                    </div>
                    <div className="col-8">
                        <Row>
                            <div className="col-12">
                                <h3>{details.product_name}</h3>
                                
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
                </Row> */}
            </Container>
        </>
    );
};

export default ProductDetail;