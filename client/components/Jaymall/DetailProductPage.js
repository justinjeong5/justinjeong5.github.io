import React, { useCallback, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter, useParams, useHistory } from 'react-router-dom'
import { PageHeader, Row, Col, Divider } from 'antd';
import { LoadingOutlined } from '@ant-design/icons'

import { LOAD_PRODUCT_DETAILS_REQUEST } from '../../reducers/types'
import ProductImage from './Detail/ProductImage'
import ProductInfo from './Detail/ProductInfo'
import { ProductClothesSort, ProductAccessorySort } from './utils/ProductSort'

function DetailProductPage() {

  const dispatch = useDispatch();
  const history = useHistory();
  const { productId } = useParams();
  const { currentProduct, loadProductDetailsLoading, loadProductDetailsDone } = useSelector(state => state.jaymall)

  useEffect(() => {
    dispatch({
      type: LOAD_PRODUCT_DETAILS_REQUEST,
      payload: productId
    })
  }, [dispatch, productId])

  const getIndex = useCallback((target) => {
    if (ProductClothesSort.includes(target)) return '의류'
    if (ProductAccessorySort.includes(target)) return '패션 잡화'
  }, [])

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

  const handleHistory = useCallback(() => {
    history.goBack(1);
  }, [])

  const loadingWrapperDivStyle = useMemo(() => ({ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: 'calc(100vh - 80px)' }), [])
  const loadingStyle = useMemo(() => ({ fontSize: '10rem' }), [])
  const pageWrapperStyle = useMemo(() => ({ width: '100%', padding: '4rem' }), [])

  return (
    <div>
      {loadProductDetailsLoading &&
        <div style={loadingWrapperDivStyle}>
          <LoadingOutlined style={loadingStyle} />
        </div>}
      {loadProductDetailsDone && <>
        <div style={pageWrapperStyle}>
          <PageHeader
            onBack={handleHistory}
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
