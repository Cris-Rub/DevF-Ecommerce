import React, { useState, useEffect } from 'react';
import { Row, Card, Button, ListGroup, Badge } from 'react-bootstrap';
import axios from 'axios';
import './Product.css';

const Product = ({ details, getProductDetails }) => {

    return (
        <>
            <div className="col mb-3" onClick={getProductDetails}>
                <Card style={{ width: '15rem', height: '25rem', cursor: 'pointer'}} className='card-product'>
                    <Card.Img
                        fluid
                        className='card-image'
                        variant="top" 
                        src={details.image}
                        // height={250}
                    />
                    <Card.Body>
                        <Card.Title>{details.product_name}</Card.Title>
                        <Card.Text className='brand-product'>
                            {details.brand}
                        </Card.Text>
                        <Card.Text className='priceProduct'>
                            <h5><b>${details.price} MXN</b></h5>
                        </Card.Text>
                        
                        {/* <Button variant="primary" size='sm'>Add to cart</Button> */}
                    </Card.Body>
                </Card> 
            </div>
        </>
    );
};

export default Product;