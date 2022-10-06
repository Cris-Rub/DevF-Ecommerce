import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import { Row, Card, Button, ListGroup, Alert } from 'react-bootstrap';
import Product from './Product';
import SidebarSearch from './SidebarSearch';
import ProductDetail from './ProductDetail';

const BoxProducts = ({ products, func }) => {
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
        setProductSelected(id);
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

            {/* <Container fluid className='px-5 mt-5'>
                <Row>
                    <div className="col-12">
                        <Alert show={show} variant="dark">
                            <Alert.Heading>BIG SALE</Alert.Heading>
                            <p>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                            lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
                            fermentum.
                            </p>
                            <hr />
                            <div className="d-flex justify-content-end">
                                <Button onClick={() => setShow(false)} variant="outline-success">
                                    SHOP NOW
                                </Button>
                            </div>
                        </Alert>
                    </div>
                </Row>
            </Container>
            <Container fluid className='px-5 mt-5'>
                <Row>
                    <div className="col-2">
                        <SidebarSearch/>
                    </div>
                    <div className='col'>
                        <div id='box-products' className='row row-cols-4'>
                            {
                                Object.values(productInfo).length === 0 ? (
                                    productArray.map((product, index) => (
                                        product.image !== undefined && (
                                            <Product
                                                details={product}
                                                key={index}
                                                getProductDetails={() => recoverProductId(product._id)}
                                            />
                                        )))
                                ) : (
                                    <ProductDetail
                                        details={productInfo}
                                        handleGoBack={() => setProductInfo({})}
                                    />
                                )         
                            }
                        </div>
                    </div>
                </Row>
            </Container> */}
        </>
    );
};

export default BoxProducts;