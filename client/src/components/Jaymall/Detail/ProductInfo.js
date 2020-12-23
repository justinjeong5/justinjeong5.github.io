import React from 'react'
import { useSelector } from 'react-redux';
import { Button, Descriptions, Tabs, } from 'antd';
import NumberFormat from 'react-number-format';

function ProductInfo() {

  const { currentProduct } = useSelector(state => state.jaymall)

  return (
    <div>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="상품 정보" key="1">
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
            >장바구니에 담기</Button>
          </div>
        </Tabs.TabPane>

        <Tabs.TabPane tab="구매 후기" key="2">
          구매 후기
        </Tabs.TabPane>
        <Tabs.TabPane tab="상품 문의" key="3">
          상품 후기
        </Tabs.TabPane>
      </Tabs>

    </div>
  )
}

export default ProductInfo
