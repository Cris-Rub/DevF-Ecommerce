import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarComponent from './components/NavbarComponent';
import BoxProducts from './components/BoxProducts';
import SidebarSearch from './components/SidebarSearch';
import ProductDetail from './components/ProductDetail';
import { Alert, Button, Row, Col, Container } from 'react-bootstrap';
import './App.css';

function App() {
    const BASE_URL = 'https://ecomerce-master.herokuapp.com/api/v1/';
    const [productToSearch, setProductToSearch] = useState({});
    const [show, setShow] = useState(true);
    const [productArray, setProductArray] = useState([]);
    const [productInfo, setProductInfo] = useState({});
    const [productSelected, setProductSelected] = useState(undefined);

    useEffect(() => {
        axios
            .get(`${BASE_URL}item`)
            .then(({ data }) => {
                setProductArray(data);
                // console.log(data);
            })
            .catch((error) => console.log(error));
    }, []);
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
        <div className="App">
            <NavbarComponent/>
            <Container fluid className='alert-banner px-5 mt-5'>
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
                                    GOT IT!
                                </Button>
                            </div>
                        </Alert>
                    </div>
                </Row>
            </Container>
            <Container fluid className='px-5 mt-5'>
                {
                    productArray.length === 0 ? (
                        <h3>Loading place holder</h3>
                    ) : (
                        Object.values(productInfo).length === 0 ? (
                            <BoxProducts
                                products={productArray}
                            />
                        ) : (
                            <ProductDetail
                                details={productInfo}
                                handleGoBack={() => setProductInfo({})}
                            />
                        )
                    )
                }
            </Container>
            
            {/* <Container fluid className='box-products px-5 mt-5'>
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
        </div>
    );
}

export default App;
