import React from 'react'
import { Row, Col, Nav, NavItem } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer style={{overflow: 'hidden'}}>
            <Row className='d-flex justify-content-center align-items-center' style={{backgroundColor: '#163A62', height: '3.5rem'}}>
                <Nav justified>
                    <Col>
                        <NavItem >
                            <p className=' text-center mb-0 text-white'>By 
                                <span className='text-white pl-1'>
                                    <a href='https://dnadevelopers.net'>
                                        DNA Developers
                                    </a>
                             </span>
                            </p>
                        </NavItem>
                    </Col>
                </Nav>
            </Row>
        </footer>
    )
}

export default Footer
