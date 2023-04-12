import React from 'react'
import { Image, Col } from 'react-bootstrap';

const image = ({ data }) => {
    return (
        <>
            <Col sm="6 mb-2" md="3">
                <a href={data.urls.regular} target="_blank">
                    <Image 
                        className="rounded w-100" 
                        src={data.urls.small} 
                        alt={data.alt_description}></Image>
                </a>   
            </Col>           
        </>
    ) 
}

export default image