import React from 'react'
import  Containter from 'react-bootstrap/Container'
import  Row from 'react-bootstrap/Row'
import  Col from 'react-bootstrap/Col'
const Footer = () => {
  return (
    <footer>
      <Containter>
        <Row>
          <Col className='text-center py-3'>
            CopyRight &copy; ProShop
          </Col>
        </Row>
      </Containter>
    </footer>
  )
}

export default Footer