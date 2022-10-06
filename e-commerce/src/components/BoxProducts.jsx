import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Row, Card, Button, ListGroup, Alert, Container } from 'react-bootstrap';
import Product from './Product';
import SidebarSearch from './SidebarSearch';
import ProductDetail from './ProductDetail';
import './BoxProducts.css';

const BoxProducts = ({ products, func }) => {
    const navigate = useNavigate();
    const BASE_URL = 'https://ecomerce-master.herokuapp.com/api/v1/';
    const [productInfo, setProductInfo] = useState({});
    const [productSelected, setProductSelected] = useState(undefined);

    useEffect(() => {
        if (productSelected) {
            axios
                .get(`${BASE_URL}item/${productSelected}`)
                .then(({ data }) => {
                    console.log(data);
                    setProductInfo(data);
                })
                .catch((error) => console.log(error));
        }
    }, [productSelected]);
    

    const recoverProductId = (id) => {
        // setProductSelected(id);
        navigate(`/product/${id}`);
    };

    return (
        <>  
            <Row>
                <div className="col-2">
                    <SidebarSearch/>
                </div>
                <div className='col'>
                    <div id='box-products' className='row row-cols-4'>
                        {
                            products.map((product, index) => (
                                product.image !== undefined && (
                                    <Product
                                        details={product}
                                        key={index}
                                        getProductDetails={() => recoverProductId(product._id)}
                                        productToShow={func(productInfo)}
                                    />
                                )))
                        }
                    </div>
                </div>
            </Row>
        </>
    );
};

export default BoxProducts;