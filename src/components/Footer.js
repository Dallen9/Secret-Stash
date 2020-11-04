import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import './footer.css';
const Footer = () => {
    return (
        <Container id="footerContainer"  style={{height: '13rem'}} className='d-flex align-items-end justify-content-center mt-5 px-0' fluid>
            <Row  className='align-items-center' style={{width: '100%', backgroundColor: '#163A62', height: '3.3rem'}}>
                <Col>
                <h6 className=' text-center mb-0 text-white'>By 
                <span className='text-white pl-2'>
                <a href='https://dnadevelopers.net'>
                DNA Developers
                </a>
                </span>
                </h6>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer
