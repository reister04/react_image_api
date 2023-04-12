import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from './image';

const images = ({ data }) => {
    return (
        <>
            <Container fluid className="mt-2">
                <Row>
                    {data.map((data, key) => <Image data={data} key={key} />)}
                </Row>
            </Container>
        </>
    )
}

export default images