import React, {useState, useEffect} from 'react'
import {Card, Button, Form, Divider, Input, Segment, Icon}  from 'semantic-ui-react';
import {Container, Row, Col, Alert, Spinner} from 'react-bootstrap';
import Api from '../util/Api';

const Home = () => {
    const [userPassword, setUserPassword] = useState({
        password: ''
    });
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        if (!error) {
            generatePW()
        } 
    }, [loading, error]);

    const generatePW = async () => {
        try {
            const res = await Api.get('random')
            setPassword(res.data.password)
            setError(false)
            setLoading(false)
        } catch (err) {
            console.error(err)
            setError(true)
            setLoading(false)
        }
    }
    const hashPW = async (pw) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        
        try {
            const res = await Api.post('create', pw , config)
            setUserPassword({
                password: res.data.password
            })
            setError(false)
            setLoading(false)
        } catch (err) {
            console.error(err)
            setError(true)
            setLoading(false)
        }
    }
    const errorMessage = () => {
        return (
            <Alert variant='danger'>
                <p className='mb-0 mt-0 text-center'>There was a problem generating your password</p>
            </Alert>
        )
    }
    const loader = () => {
        return (
            <Spinner className='d-flex mx-auto' animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        )
    }
    const onChange = (e) => {
        setUserPassword({ 
            [e.target.name] : e.target.value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if(userPassword.password !== '') {
            hashPW(userPassword)
        }
    }
    return (
        <Container className='py-5'>
            <Card >
                <Card.Content style={{margin: '3rem 0'}}>
                    <Row className='d-flex'>
                        <Col xs className='mx-auto'>
                        <Card.Header> 
                        {error && errorMessage()}
                        <h1 style={{textAlign: 'center', color: '#163a62'}}>Generate a secure password</h1>
                        </Card.Header>
                        </Col>
                    </Row>
                    <Row className='d-flex '>
                        <Col xs className='d-flex justify-content-center'>
                            <Card.Description style={{color: '#163a62'}}>
                                <h3 className='mt-3'>
                                    Use our tool to create the world's strongest password with just
                                    a click
                                </h3>
                                <Segment raised padded className='seg mx-auto'>
                                    <Row >
                                        <Col  xs={10} lg={11} className='flex-column mx-auto'>
                                            <h4 className='mb-0'>{loading ? loader() : password}</h4>
                                        </Col>
                                        <Col xs={2} md={1}>
                                        <span>
                                            <Icon size='big' link='/' name='copy outline' onClick={() =>  navigator.clipboard.writeText(password)}/>
                                        </span>
                                        </Col>
                                    </Row>
                                </Segment>
                                <Button color='violet' onClick={() => generatePW()}>Generate Password</Button>  
                                <h2 className='mt-5'>Secure your existing password</h2>
                                <Divider />
                                <Form style={{marginTop: '2rem'}}  onSubmit={onSubmit}>
                                    <Form.Field 
                                    label='Password'
                                    name="password"
                                    type='text'
                                    placeholder='Enter Password'
                                    value={userPassword.password}
                                    onChange={onChange}
                                    control={Input}
                                    />
                                <Button color='violet' type='submit'>Secure password</Button>
                                <Button color='teal' type='button' onClick={() =>  navigator.clipboard.writeText(userPassword.password)}>Copy</Button>
                                </Form> 
                            </Card.Description>
                        </Col>
                    </Row>  
                </Card.Content>  
           </Card>
        </Container>
    )
}

export default Home
