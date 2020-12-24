import React from 'react'
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'
import { Card, Col, Carousel, Descriptions } from 'antd';
import NumberFormat from 'react-number-format';
import { SERVER_URL } from '../../../config/key'

function ProductCard(props) {

  const { product } = props;

  return (
    <>
      <Col lg={6} md={8} sm={12} xs={24} >
        <Card
          hoverable={true}
          style={{ width: '100%' }}
        >
          <Link to={`/jaymall/product/${product._id}`} style={{ color: 'black' }}>
            <Carousel autoplay >
              {product?.images?.map((img) => {
                return (
                  <div key={uuidv4()}>
                    <img src={`${SERVER_URL}/${img.image}`} alt={img.fileName} style={{ width: '100%' }} />
                  </div>
                )
              })}
            </Carousel>
            <div style={{ marginTop: 20 }}>
              <Card.Meta title={product.title} description={`${product.description.slice(0, 30)}...`} />
              <Descriptions style={{ marginTop: 14 }}>
                <Descriptions.Item label='가격' span={3} >
                  <NumberFormat value={product.price} displayType={'text'} thousandSeparator={true} suffix={'원'} />
                </Descriptions.Item>
              </Descriptions>
            </div>
          </Link>
        </Card>
      </Col>
    </>
  )
}

export default ProductCard
