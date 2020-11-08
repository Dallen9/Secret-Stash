import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import './footer.css';
const Footer = () => {
    return (
        <Container id="footerContainer"  className='d-flex align-items-end mt-5 justify-content-center px-0' fluid>
            <Row  className='align-items-center' style={{width: '100%', backgroundColor: '#163A62', height: '3.3rem'}}>
                <Col>
                <p className=' text-center mb-0 text-white'>By 
                <span className='text-white pl-2'>
                <a href='https://dnadevelopers.net'>
                DNA Developers
                </a>
                </span>
                </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer
