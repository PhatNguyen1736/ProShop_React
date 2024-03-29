import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import {Form, Button, Row, Col} from 'react-bootstrap'
import { UseDispatch, useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {login} from '../actions/userActions'
import FormContainer from '../components/FormContainer'
import { useLocation } from 'react-router-dom';

 const LoginScreen = ({history}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const {loading, error, userInfo} = userLogin

    const location = useLocation();
    const { search } = location;

    const redirect = search ? search.split('=')[1] : '/';

    useEffect(() =>{
        if(userInfo){
            // history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) =>{
        e.preventDefault()
        dispatch(login(email, password))
    }
  return (
    <FormContainer>
        <h1>Sign In</h1>
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader/>}
        <Form onSubmit = {submitHandler}>
            <Form.Group controlId = 'email'>
                <Form.Label>  Email Address </Form.Label>
                <Form.Control 
                type = 'email' 
                placeholder='Enter email'
                value={email}
                OnChange={(e) =>  setEmail(e.target.value)} >
                </Form.Control>
            </Form.Group>

            <Form.Group controlId = 'password'>
                <Form.Label>  Password Address</Form.Label>
                <Form.Control 
                type = 'password' 
                placeholder='Enter password'
                value={password}
                OnChange={(e) =>  setPassword(e.target.value)} >
                </Form.Control>
            </Form.Group>
            <Button type ='submit' variant='primary'> 
                Sign In
            </Button>
        </Form>

        <Row className='py-3'>
            <Col>
                New Customer? {' '}
                <Link to = {redirect ? `/register?redirect=${redirect}` : '/register'}>
                    Register
                </Link>
            </Col>

        </Row>
    </FormContainer>
  )
}

export default LoginScreen