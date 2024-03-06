import React from 'react'
import axios from 'axios'
import {CART_ADD_ITEM, CART_REMOVE_ITEM} from '../constant/cartContants'

    
export const addToCart = (id, qty) => async(dispatch, getState) => {

    const {data} = await axios.get(`/api/products/${id}`)

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,  
            price: data.price,
            countInStock: data.countInStock,
            qty
        },
    })

    /* localStorage được sử dụng để lưu trữ thông tin về các mục trong giỏ hàng (cartItems). 
    Khi một mục mới được thêm vào giỏ hàng, dữ liệu của giỏ hàng được cập nhật trong Redux Store thông qua dispatch, và 
    sau đó, trạng thái mới của giỏ hàng được lưu trữ trong localStorage */

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => (dispatch, getState) => {

    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))

}