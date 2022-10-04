import React, { useEffect, useState} from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/esm/Container';
import { Row, Card, Button, ListGroup } from 'react-bootstrap';
import Product from './Product';
import SidebarSearch from './SidebarSearch';
import AlertComponent from './AlertComponent';

const BoxProducts = () => {
    const BASE_URL = 'https://ecomerce-master.herokuapp.com/api/v1/';
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
        <>
            {/* <Container fluid className='px-5 mt-5'>
                <Row>
                    <Col className='mb-3 col-3'>
                        <h5>Popular</h5>
                        <ListGroup variant="flush">
                            <ListGroup.Item as='a'>Toys</ListGroup.Item>
                            <ListGroup.Item as='a'>Kitchen</ListGroup.Item>
                            <ListGroup.Item as='a'>Beauty</ListGroup.Item>
                            <ListGroup.Item as='a'>Home</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col className='mb-5'>
                        <Row className='mb-5'>
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
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Row>
                    </Col>
                </Row>
            </Container> */}
            <Container fluid className='px-5 mt-5'>
                <Row>
                    <div className="col-3">
                        <SidebarSearch/>
                    </div>
                    <div className='col'>
                        <div id='box-products' className='row row-cols-3'>
                            {
                                productArray.lenght === 0 ? (
                                    // <AlertComponent/>
                                    console.log('Alerta')
                                ) : (
                                    productArray.map((product, index) => (
                                        product.image !== undefined && (
                                            <Product
                                                details={product}
                                                key={index}
                                                getProductDetails={() => recoverProductId(product._id)}
                                            />
                                        ) 
                                        // <Product
                                        //     details={product}
                                        //     key={index}
                                        //     getProductDetails={() => recoverProductId(product._id)}
                                        // />
                                    ))
                                )
                                
                                
                            }
                        </div>
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default BoxProducts;