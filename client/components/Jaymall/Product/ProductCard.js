import React, { useMemo } from 'react'
import Link from '../../utils/Link'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'
import { Card, Col, Carousel, Descriptions } from 'antd';
import NumberFormat from 'react-number-format';

function ProductCard(props) {

  const { product } = props;

  const cardStyle = useMemo(() => ({ width: '100%' }), [])
  const cardDescriptionWrapperStyle = useMemo(() => ({ marginTop: 20 }), [])
  const cardDescriptionStyle = useMemo(() => ({ marginTop: 14 }), [])

  return (
    <Col lg={6} md={8} sm={12} xs={24} >
      <Card
        hoverable={true}
        style={cardStyle}
      >
        <Link href={`/jaymall/product/${product._id}`}>
          <a>
            <Carousel autoplay >
              {product?.images?.map((img) => {
                return (
                  <div key={uuidv4()}>
                    <img src={img.image} alt={img.fileName} style={cardStyle} />
                  </div>
                )
              })}
            </Carousel>
            <div style={cardDescriptionWrapperStyle}>
              <Card.Meta title={product.title} description={`${product.description.slice(0, 30)}...`} />
              <Descriptions style={cardDescriptionStyle}>
                <Descriptions.Item label='가격' span={3} >
                  <NumberFormat value={product.price} displayType={'text'} thousandSeparator={true} suffix={'원'} />
                </Descriptions.Item>
              </Descriptions>
            </div>
          </a>
        </Link>
      </Card>
    </Col>
  )
}

export default ProductCard
