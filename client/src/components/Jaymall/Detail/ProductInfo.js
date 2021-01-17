import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Button, Descriptions, Tabs, } from 'antd';
import NumberFormat from 'react-number-format';
import { ADD_TO_CART_REQUEST } from '../../../reducers/types'
import Comment from '../../utils/Comment/Comment'

function ProductInfo() {

  const dispatch = useDispatch();
  const { currentUser } = useSelector(state => state.user)
  const { currentProduct } = useSelector(state => state.jaymall)

  const handleAddToCart = () => {
    dispatch({
      type: ADD_TO_CART_REQUEST,
      payload: { productId: currentProduct._id }
    })
  }

  return (
    <div>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="상품 정보" key="productInfo">
          <Descriptions >
            <Descriptions.Item label="가격" span={3}>
              <NumberFormat value={currentProduct.price} displayType={'text'} thousandSeparator={true} suffix={'원'} />
            </Descriptions.Item>
            <Descriptions.Item label="조회수" span={3}>{currentProduct.views}</Descriptions.Item>
            <Descriptions.Item label="누적판매" span={3}>{currentProduct.sold}</Descriptions.Item>
            <Descriptions.Item >&nbsp;&nbsp;{currentProduct.description}</Descriptions.Item>
          </Descriptions>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
            <Button
              size='large'
              shape='round'
              type='danger'
              onClick={handleAddToCart}
              disabled={!currentUser.isAuth}
            >
              {currentUser.isAuth ? '장바구니에 담기' : '로그인해주세요.'}
            </Button>
          </div>
        </Tabs.TabPane>

        <Tabs.TabPane tab="구매 후기" key="productReview">
          <Comment disabled={!currentUser.isAuth} payload={{ jaymallId: currentProduct._id }} description='후기 남기기' placeholder="상품의 사용 후기를 공유해주세요!" />
        </Tabs.TabPane>
      </Tabs>

    </div>
  )
}

export default ProductInfo
