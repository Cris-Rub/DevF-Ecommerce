import React from 'react';
import { Row, Card, Button, ListGroup, Alert } from 'react-bootstrap';

const AlertComponent = () => {
    console.log('Alert');
    return (
        <>
            <Alert variant='primary'>
                Hola!
            </Alert>
        </>
    );
};

export default AlertComponent;