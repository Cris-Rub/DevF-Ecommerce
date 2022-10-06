import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Alert, Button, Row, Container } from 'react-bootstrap';
import ErrorPage from './components/ErrorPage';
import NavbarComponent from './components/NavbarComponent';
import BoxProducts from './components/BoxProducts';
import ProductDetail from './components/ProductDetail';
import LoadingComponent from './components/LoadingComponent';
import './App.css';


function App() {
    const BASE_URL = 'https://ecomerce-master.herokuapp.com/api/v1/';
    const [show, setShow] = useState(true);
    const [productArray, setProductArray] = useState([]);
    const [productInfo, setProductInfo] = useState({});

    useEffect(() => {
        fillValues();
    }, []);
    const fillValues = () => {
        axios
            .get(`${BASE_URL}item`)
            .then(({ data }) => {
                setProductArray(data);
                console.log(productArray);
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className="App">
            <Routes>
                <Route index element={<Navigate replace to='/home'/>}/>
                <Route
                    path='/home'
                    element={
                        <>
                            <NavbarComponent
                                results={productArray}
                                search={(data) => {
                                    console.log(data);
                                    if(data.length===0){
                                        setProductArray([]);
                                        fillValues();
                                        setProductInfo({});
                                    }else{
                                        setProductArray([]);
                                        setProductArray(data);
                                    }
                                }}
                            />
                            <Container fluid className='alert-banner px-5 mt-5'>
                                {/* <Row>
                                    <div className="col-12">
                                        <Alert show={show} variant="dark">
                                            <Alert.Heading>BIG SALE</Alert.Heading>
                                            <p>
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum non praesentium quas, pariatur nostrum repudiandae labore sunt recusandae adipisci, natus quos vel? Molestiae aliquid obcaecati laboriosam dolorem alias delectus eos.
                                            </p>
                                            <hr />
                                            <div className="d-flex justify-content-end">
                                                <Button onClick={() => setShow(false)} variant="outline-success">
                                                    GOT IT!
                                                </Button>
                                            </div>
                                        </Alert>
                                    </div>
                                </Row> */}
                            </Container>
                            <Container fluid className='px-5 mt-5'>
                                {
                                    productArray.length === 0 ? (
                                        <LoadingComponent/>
                                    ) : (
                                        Object.values(productInfo).length === 0 ? (
                                            <BoxProducts
                                                products={productArray}
                                                func={(data) => setProductInfo(data)}
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
                        </>
                    }
                />
                <Route path='*' element={<ErrorPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
