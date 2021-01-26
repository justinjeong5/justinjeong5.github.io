import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row } from 'antd'
import { v4 as uuidv4 } from 'uuid';
import { LOAD_PRODUCTS_REQUEST } from '../../reducers/types';
import ProductCard from '../Jaymall/Product/ProductCard';

function JaymallSummary() {

  const dispatch = useDispatch();
  const { productData } = useSelector(state => state.jaymall);

  useEffect(() => {
    if (productData.length === 0) {
      dispatch({
        type: LOAD_PRODUCTS_REQUEST
      })
    }
  }, [])

  const getProductData = useCallback(() => {
    return productData.slice(0, 4);
  }, [productData])

  return (
    <Row gutter={[10, 10]}>
      {getProductData().map(product => {
        return (<ProductCard key={uuidv4()} product={product} />)
      })}
    </Row>
  )
}

export default JaymallSummary
