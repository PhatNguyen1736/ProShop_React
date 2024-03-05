import React, {useEffect} from 'react'
import { useParams} from "react-router-dom";
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {Row, Col, ListGroup, Image,Form, Button, Card} from 'react-bootstrap'
import Message from '../components/Message'
import {addToCart} from '../actions/cartActions'

const CartScreen = ({history}) => {

  // const {productId} = useParams();
  const productId = useParams()

  
  const { search } = useLocation();

  const qty = search ? Number(new URLSearchParams(search).get('qty')) : 1; 

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const {cartItems} = cart

  console.log(cartItems)

  useEffect(() => {
    if (productId){
      dispatch(addToCart(productId, qty))

      // console.log(productId);
    }
  },[dispatch, productId, qty])

  return (
    <div>CartScreen</div>
  )
}

export default CartScreen