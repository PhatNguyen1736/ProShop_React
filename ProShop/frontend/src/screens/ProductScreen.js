import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'
import Rating from '../components/Rating'
import { useParams } from "react-router-dom";
import axios from 'axios'

const ProductScreen = () => {

    // Tìm kiếm sản phẩm với id tương ứng   
    const { id } = useParams();
    const [product, setProduct] = useState({})
    useEffect(() => {   
        const fetchProduct = async () =>{
          const {data} = await axios.get(`/api/products/${id}`)
    
          setProduct(data)
        }
          fetchProduct()
      }, [id])
      
   return (
        <>
            <Link className='btn btn-dark my-3' to='/'>
                Go back
            </Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid/>
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'}/>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: ${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col><strong>${product.price}</strong></Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col><strong>{product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</strong></Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Button className='btn-block' type='button' disabled={product.countInStock === 0}> 
                                        Add To Cart
                                    </Button>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
   );
};

export default ProductScreen