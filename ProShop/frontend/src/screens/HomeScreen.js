import React, {useState, useEffect} from 'react'
import { Row, Col, Container } from 'react-bootstrap' 
import Product from '../components/Product'
import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from 'axios'
const HomeScreen = () => {
  const [products, setProducts] = useState([])
  // hàm useEffect để gọi API từ backend để lấy dữ liệu products
  useEffect(() => {   
    const fetchProducts = async () =>{
      const {data} = await axios.get('/api/products')

      setProducts(data)
    }
      fetchProducts()
  }, [])
  return (
    <>
     <Header/>
        <Container>
          <Row>
              <h1>Latest Products</h1>
              {products.map(product => (
                  <Col key={product._id}sm = {12} md={6} lg={4} xl={3}>
                      <Product product={product}/>
                  </Col>
              ))}
          </Row>
        </Container>
      <Footer/>
    </>
  )
}

export default HomeScreen