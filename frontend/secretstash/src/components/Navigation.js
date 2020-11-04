import React from 'react'
import {Navbar} from 'react-bootstrap';

const Navigation = () => {
    return (
        <div>
          <Navbar  variant='dark' className='py-3' style={{backgroundColor: '#163a62'}}>
              <Navbar.Brand href='/'><h2 color='red'>Secret Stash</h2></Navbar.Brand>
            </Navbar>  
        </div>
    )
}

export default Navigation
