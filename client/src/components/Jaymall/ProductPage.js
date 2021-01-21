import React, { useCallback, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { Row, Col, Typography, Skeleton, Empty } from 'antd';

import { LOAD_PRODUCTS_REQUEST, SET_ALL_FILTERS_INFO } from '../../reducers/types'
import ProductCard from './Product/ProductCard'
import ProductFilter from './Product/ProductFilter'

const { Title } = Typography;

function ProductPage() {

  const dispatch = useDispatch();
  const { productData, loadProductsLoading, loadProductsDone, noMoreProducts, skip, limit, orderBy, sortBy, filters } = useSelector(state => state.jaymall)

  useEffect(() => {
    function onScroll() {
      if (window.pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (!loadProductsLoading && !noMoreProducts) {
          dispatch({
            type: LOAD_PRODUCTS_REQUEST,
            payload: { skip, limit, orderBy, sortBy, filters },
          });
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [dispatch, loadProductsLoading, noMoreProducts, skip, limit, orderBy, sortBy, filters]);

  useEffect(() => {
    if (skip === 0) {
      dispatch({
        type: LOAD_PRODUCTS_REQUEST,
        payload: { skip, limit },
      });
    }
  }, [dispatch, skip])

  const onFilterChange = useCallback((data) => {
    dispatch({
      type: SET_ALL_FILTERS_INFO,
      payload: {
        skip: 0,
        limit: 8,
        orderBy: data.orderBy,
        sortBy: data.sortBy,
        filters: {
          sort: data.sort,
          price: data.price,
          word: data.word,
        },
      }
    })
  }, [])

  const renderSkeleton = useMemo(() => (Array.from(Array(limit)).map(_ => {
    return (
      <Col key={uuidv4()} lg={6} md={8} sm={12} xs={24} >
        <Skeleton.Image />
        <Skeleton active />
      </Col>
    )
  })), [])

  const rootDivWrapperStyle = useMemo(() => ({ width: '75%', margin: '3rem auto' }), [])
  const titleDivWrapperStyle = useMemo(() => ({ textAlign: 'center', marginTop: 100, marginBottom: 100 }), [])
  const emptyWrapperStyle = useMemo(() => ({ margin: '200px auto' }), [])


  return (
    <div style={rootDivWrapperStyle}>
      <div style={titleDivWrapperStyle}>
        <Title level={2}>좋은 옷, Jaymall</Title>
      </div>
      {productData && <ProductFilter onFilterChange={onFilterChange} />}
      <Row gutter={[24, 32]}>
        {loadProductsLoading && !productData.length && renderSkeleton}
        {productData?.map(product => (
          <ProductCard key={uuidv4()} product={product} />
        ))}
        {loadProductsDone && productData?.length === 0 && <div style={emptyWrapperStyle}>
          <Empty description='필터 조건에 맞는 상품이 없습니다.' />
        </div>}
      </Row>
    </div>
  )
}

export default ProductPage;
