import React, {useEffect} from 'react'
import { useParams} from "react-router-dom";
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {Row, Col, ListGroup, Image,Form, Button, Card} from 'react-bootstrap'
import Message from '../components/Message'
import {addToCart} from '../actions/cartActions'
import "bootstrap-icons/font/bootstrap-icons.css"
const CartScreen = ({history}) => {
  
  const { id} = useParams();

  
  const { search } = useLocation();

  // const qty = search ? Number(new URLSearchParams(search).get('qty')) : 1; 
  const qty = search ? Number(search.split('=')[1]) : 1

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const {cartItems} = cart

  console.log("cartItems",cartItems)

  useEffect(() => {
    if (id){
      // gửi action addToCart với productId và qty như là payload của action đến store redux .
      dispatch(addToCart(id, qty))
    }
  },[dispatch, id, qty]) 

  const removeFromCartHandler = (id) => {
    console.log('remove')
  }
  return (
    <Row>
      <Col md ={8}>
          <h1> Shopping Cart </h1>
          {cartItems.length === 0 ? (
            <Message>
                Your cart is emtpy 
                <Link to =  "/">Go back</Link> 
            </Message>
          ): (
            <ListGroup variant='flush'>
              {cartItems.map(item => (
                <ListGroup.Item key = {item.product}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>

                    <Col md ={3}>
                        <Link to= {`/product/${item.product}`}>{item.name} </Link>
                    </Col>
                    <Col md={2}>
                      ${item.price }
                    </Col>
                    <Col>
                    <Form.Control as= 'select' value = {qty} onChange={(e) => dispatch(addToCart(item.product, 
                                                Number(item.target.value)))}>
                                               {
                                                [...Array(item.countInStock).keys()].map((x) => (
                                                    
                                                    <option key = {x+1} value = {x+1}>
                                                        {x + 1}
                                                    </option>

                                                ))
                                               } 
                      </Form.Control>
                    </Col>
                    <Col md ={2}>
                      <Button type='button' variant='light' onClick={() => removeFromCartHandler(item.product)}></Button>
                      <i class= 'far fa-trash'></i>
                    </Col>
                  </Row>

                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
      </Col>
      <Col md ={2}>

      </Col>
      <Col md ={2}>

      </Col>
    </Row>
  )
}

export default CartScreen