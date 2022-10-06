import React from 'react';
import { Container, Spinner, Stack } from 'react-bootstrap';
import './LoadingComponent.css';

const LoadingComponent = () => {
    return (
        <>
            {/* <Container className='container-loading px-5 mt-5 mb-5'> */}
                <Stack direction='horizontal' gap={3} className='container-loading px-5 mt-5 mb-5'>
                    <div>
                        <h1>Loading content... <Spinner animation='border' size='lg' variant="danger"></Spinner></h1>
                        
                    </div>
                </Stack>
            {/* </Container> */}
        </>
    );
};

export default LoadingComponent;