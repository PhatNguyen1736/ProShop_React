import React, {useState, useEffect} from 'react'
import { Row, Col, Container } from 'react-bootstrap' 
import Product from '../components/Product'
import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from 'axios'
//useDispatch, useSelector: Hook của React Redux được sử dụng để tương tác với store Redux.
import {useDispatch, useSelector} from 'react-redux'
import {listProducts} from '../actions/productActions'
const HomeScreen = () => {
  // const [products, setProducts] = useState([])
  //useDispatch được sử dụng để lấy dispatch function từ store Redux, cho phép bạn gửi các action đến store.
  const dispatch = useDispatch()

  //useSelector được sử dụng để chọn và trích xuất dữ liệu từ store Redux.
  // Trong trường hợp này, nó chọn dữ liệu của productList từ store.
  const productList = useSelector(state => state.productList)

  //Destructuring để trích xuất các thuộc tính loading, error và products từ productList.
  const {loading, error, products} = productList

  // hàm useEffect để gọi API từ backend để lấy dữ liệu products
  useEffect(() => {   
    // const fetchProducts = async () =>{
    //   const {data} = await axios.get('/api/products')

    //   setProducts(data)
    // }
    //   fetchProducts()
    dispatch(listProducts())

  }, [dispatch])

  const product = []

  return (
    <>
     <Header/>
        <Container>
           <h1>Latest Products</h1>
           {
               loading ? (<h2>Loading ...</h2>) : error ? (<h3> {error} </h3>) : (
               <Row>
               {products.map(product => (
                   <Col key={product._id}sm = {12} md={6} lg={4} xl={3}>
                       <Product product={product}/>
                   </Col>
               ))}
              </Row>  
              )
           }

        </Container>
      <Footer/>
    </>
  )
}

export default HomeScreen