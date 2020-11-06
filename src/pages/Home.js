import React, {useState, useEffect} from 'react'
import {Card, Button, Form, Divider, Segment, Icon, Input, Dimmer, Loader, Popup}  from 'semantic-ui-react';
import {Container, Row, Col, Alert} from 'react-bootstrap';
import Api from '../util/Api';

const Home = () => {
    const [userPassword, setUserPassword] = useState({
        password: '',
        salt: ''
    });
    const [newPassword, setNewPassword] = useState({
        password: ''
    })
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        if (!error) {
            generatePW()
        } 
    }, [error]);

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
 

    const hashCustomPW = async (pw) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await Api.post('custom', pw , config)
            
            setNewPassword({
                password: res.data.password,
             })
            setUserPassword({
                password: res.data.password,
                salt: res.data.salt
            })
            if(newPassword !== null) {
                setUserPassword({
                    password: '',
                    salt: ''
                })
            }  
            setLoading(false)
            setError(false)
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
    const load = () => {
        return (
        <Dimmer active inverted className='d-flex'>
            <Loader size='tiny' inverted className='mx-auto'>Loading</Loader>
        </Dimmer>
        )
    }
    const onChange = (e) => {
        setUserPassword({
            ...userPassword,
            [e.target.name] : e.target.value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if(userPassword.password !== '') {
            hashCustomPW(userPassword)
        }         
    }
    return (
        <Container className='my-5'>
            <Card >
                <Card.Content style={{margin: '2rem 0', paddingBottom:'0'}}>
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
                                <h2 className='mt-3'>
                                    Use our tool to create the world's strongest password with just
                                    a click
                                </h2>
                                <Segment raised padded className='seg mx-auto'>
                                    <Row >
                                        <Col  xs={10} lg={11} className='flex-column mx-auto'>
                                            <h3 className='mb-0'>{loading ? load() : password}</h3>
                                        </Col>
                                        <Col xs={2} md={1} className='flex-column mx-auto'>
                                        <span>
                                            <Icon size='big' link='/' name='copy outline' onClick={() =>  navigator.clipboard.writeText(password)}/>
                                        </span>
                                        </Col>
                                    </Row>
                                </Segment>
                                <Button color='violet' onClick={() => generatePW()}>Generate Password</Button>  
                                <h3 className='mt-5'>Secure your existing password</h3>
                                <Divider />
                                <Form style={{marginTop: '2rem'}}  onSubmit={onSubmit}> 
                                        <Form.Field required>
                                            <label>Password</label>
                                            <Input 
                                            name="password"
                                            type='password'
                                            placeholder='Enter Password'
                                            value={userPassword.password}
                                            onChange={onChange}
                                        />
                                        </Form.Field>
                                        <Row className='d-flex mb-3'>
                                            <Col xs={10} lg={11} className='pr-0'>
                                            <Form.Field>
                                        <label>Salt</label>
                                            <Input 
                                            name="salt"
                                            type='text'
                                            placeholder='Enter Salt'
                                            value={userPassword.salt}
                                            onChange={onChange}
                                        />
                                        </Form.Field> 
                                            </Col>
                                            <Col xs={2} md={1} className='mt-4 mb-0 pl-0' >
                                            
                                        <Popup 
                                           
                                            trigger={<Icon style={{float: 'right'}}  name='question circle outline' size='large' />}
                                            content="Salt extends the password's hash and transforms it into a unique password by adding 
                                            another layer of security on top of what you have already entered."
                                        />
                                            </Col>
                                        </Row>
                                   
                                <Button color='violet' type='submit'>Secure password</Button>
                                </Form>
                                <div className='my-5'>
                                    <h3>New Password</h3>
                                <Segment raised padded className='seg mx-auto mt-4'>
                                    <Row >
                                        <Col  xs={10} lg={11} className='flex-column mx-auto'>
                                            <h3 >{loading && !newPassword ? load() : newPassword.password}</h3>
                                        </Col>
                                        <Col xs={2} md={1} className='flex-column mx-auto'>
                                        <span>
                                            <Icon size='big' link='/' name='copy outline' onClick={() =>  navigator.clipboard.writeText(newPassword)}/>
                                        </span>
                                        </Col>
                                    </Row>
                                </Segment> 
                                </div> 
                            </Card.Description>
                        </Col>
                    </Row>  
                </Card.Content>  
           </Card>
        </Container>
    )
}

export default Home
