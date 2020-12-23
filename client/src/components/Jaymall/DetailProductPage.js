import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { PageHeader, Row, Col, Divider } from 'antd';
import { LoadingOutlined } from '@ant-design/icons'

import { LOAD_PRODUCT_DETAILS_REQUEST } from '../../reducers/types'
import ProductImage from './Detail/ProductImage'
import ProductInfo from './Detail/ProductInfo'
import { ProductClothesSort, ProductAccessorySort } from './utils/ProductSort'

function DetailProductPage(props) {

  const dispatch = useDispatch();
  const { currentProduct, loadProductDetailsLoading, loadProductDetailsDone } = useSelector(state => state.jaymall)

  const getIndex = (target) => {
    if (ProductClothesSort.includes(target)) return '의류'
    if (ProductAccessorySort.includes(target)) return '패션 잡화'
  }

  const routes = [
    {
      path: 'index',
      breadcrumbName: getIndex(currentProduct.sort),
    },
    {
      path: 'first',
      breadcrumbName: currentProduct.sort,
    }
  ];

  useEffect(() => {
    dispatch({
      type: LOAD_PRODUCT_DETAILS_REQUEST,
      payload: props.match.params.productId
    })
  }, [props.match.params.productId])

  return (
    <div>
      {loadProductDetailsLoading &&
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: 'calc(100vh - 80px)' }}>
          <LoadingOutlined style={{ fontSize: '10rem' }} />
        </div>}
      {loadProductDetailsDone && <>
        <div style={{ width: '100%', padding: '4rem' }}>
          <PageHeader
            className="site-page-header"
            onBack={() => window.history.back()}
            title={currentProduct.title}
            breadcrumb={{ routes }}
          />
          <Divider />
          <Row gutter={[16, 16]}>
            <Col lg={12} xs={24}>
              <ProductImage />
            </Col>
            <Col lg={12} xs={24}>
              <ProductInfo />
            </Col>
          </Row>
        </div>
      </>}
    </div >
  )
}

export default withRouter(DetailProductPage)
