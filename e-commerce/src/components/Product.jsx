import React, { useState, useEffect } from 'react';
import { Row, Card, Button, ListGroup, Badge } from 'react-bootstrap';
import axios from 'axios';

const Product = ({ details, getProductDetails }) => {

    return (
        <>
            
                {/* details.image != undefined || details.price != undefined ? ( */}
                    <div className="col mb-3" onClick={getProductDetails}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={details.image} />
                            <Card.Body>
                                <Card.Title>{details.product_name}</Card.Title>
                                <Card.Text>
                                    {details.description}
                                </Card.Text>
                                <h4>
                                    Price <Badge bg="info">{`$${details.price}`}</Badge>
                                </h4>
                                <Button variant="primary">Add to cart</Button>
                            </Card.Body>
                        </Card> 
                    </div>
                 {/* ) */}
            
            
            {/* <div className="col mb-3">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://i.pinimg.com/originals/eb/83/be/eb83be580847bcdc4c8f403c8085d3c8.jpg" />
                    <Card.Body>
                        <Card.Title>Awesome Granite Bacon</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the cards content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card> 
            </div>
            <div className="col mb-3">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://i.pinimg.com/originals/eb/83/be/eb83be580847bcdc4c8f403c8085d3c8.jpg" />
                    <Card.Body>
                        <Card.Title>Awesome Granite Bacon</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the cards content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card> 
            </div>
            <div className="col mb-3">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://i.pinimg.com/originals/eb/83/be/eb83be580847bcdc4c8f403c8085d3c8.jpg" />
                    <Card.Body>
                        <Card.Title>Awesome Granite Bacon</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the cards content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card> 
            </div>
            <div className="col mb-3">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://i.pinimg.com/originals/eb/83/be/eb83be580847bcdc4c8f403c8085d3c8.jpg" />
                    <Card.Body>
                        <Card.Title>Awesome Granite Bacon</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the cards content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card> 
            </div> */}
        
        </>
    );
};

export default Product;