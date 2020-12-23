import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'
import { Row, Col, Typography, Skeleton } from 'antd';

import { LOAD_PRODUCTS_REQUEST } from '../../reducers/types'
import ProductCard from './Product/ProductCard'

const { Title } = Typography;

function ProductPage() {

  const dispatch = useDispatch();
  const { productData, loadProductsLoading, noMoreProducts, skip, limit } = useSelector(state => state.jaymall)

  useEffect(() => {
    function onScroll() {
      if (window.pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (!loadProductsLoading && !noMoreProducts) {
          dispatch({
            type: LOAD_PRODUCTS_REQUEST,
            payload: { skip, limit },
          });
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [loadProductsLoading, noMoreProducts, skip, limit]);

  useEffect(() => {
    dispatch({
      type: LOAD_PRODUCTS_REQUEST,
      payload: { skip, limit },
    });
  }, [])

  const renderSkeleton = Array.from(Array(limit)).map((_) => {
    return (<>
      <Col lg={6} md={8} sm={12} xs={24} >
        <Skeleton.Image />
        <Skeleton active />
      </Col>
    </>)
  })

  return (
    <>
      <div style={{ width: '75%', margin: '3rem auto' }}>
        <div style={{ textAlign: 'center', marginTop: 100, marginBottom: 100 }}>
          <Title level={2}>좋은 옷, Jaymall</Title>
        </div>
        <Row gutter={[24, 32]}>
          {loadProductsLoading && productData?.length === 0 && renderSkeleton}
          {productData?.map(product => (
            <ProductCard key={uuidv4()} product={product} />
          ))}
        </Row>
      </div>
    </>
  )
}

export default withRouter(ProductPage);
