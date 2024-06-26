import React from 'react'
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product'
import Loader from '../components/Loader';
import { useGetProductsQuery } from '../slices/productApiSlice';

const HomeScreen = () => {
    const { data: products, isLoading, error } = useGetProductsQuery();
  return (
    <>
     { isLoading ? (
        <Loader />
     ) : error ? (<div>{ error?.data?.message || error.error }</div>) : (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map((product) => (
                    <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product}/>
                    </Col>
                ))}
            </Row>
        </>
    )}
      
    </>
  )
}

export default HomeScreen
