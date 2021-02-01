import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { Row } from 'antd'
import { v4 as uuidv4 } from 'uuid';
import ProductCard from '../Jaymall/Product/ProductCard';

function JaymallSummary() {

  const { productData } = useSelector(state => state.jaymall);

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
