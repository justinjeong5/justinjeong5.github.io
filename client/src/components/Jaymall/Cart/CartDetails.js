import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import NumberFormat from 'react-number-format'
import { Table, Tag } from 'antd';
import { CloseOutlined } from '@ant-design/icons'

import { REMOVE_CART_ITEM_REQUEST } from '../../../reducers/types'
import { ProductAccessorySort, ProductClothesSort } from '../utils/ProductSort'
import { SERVER_URL } from '../../../config/config'

function CartDetails() {

  const dispatch = useDispatch();
  const { cartWithDetail, loadCartItemsLoading } = useSelector(state => state.user);

  const handleRemoveItem = (productId) => () => {
    dispatch({
      type: REMOVE_CART_ITEM_REQUEST,
      payload: {
        productId
      }
    })
  }

  const getTagColor = (tag) => {
    if (ProductAccessorySort.includes(tag)) {
      return 'geekblue'
    }
    if (ProductClothesSort.includes(tag)) {
      return 'green'
    }
  }

  const columns = [
    {
      title: '',
      dataIndex: 'image',
      key: 'image',
      render: (item) => (<img height={150} src={`${SERVER_URL}/${item}`} alt='product' />)
    },
    {
      title: '상품명',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '개수',
      dataIndex: 'quantity',
      key: 'quantity',
      render: quantity => `${quantity}개`,
    },
    {
      title: '단가',
      dataIndex: 'price',
      key: 'price',
      render: price => <NumberFormat value={price} displayType={'text'} thousandSeparator={true} suffix={'원'} />,
    },
    {
      title: '가격',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
      render: price => <NumberFormat value={price} displayType={'text'} thousandSeparator={true} suffix={'원'} />,
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => tags.map(tag => (
        <Tag color={getTagColor(tag)} key={tag}>{tag}</Tag>
      )),
    },
    {
      title: '장바구니',
      key: 'cart',
      render: (item) => <div onClick={handleRemoveItem(item.key)}><CloseOutlined /></div>
    },
  ];


  return (
    <>
      <Table
        columns={columns}
        dataSource={cartWithDetail}
        onHeaderRow={() => ({ align: 'center' })}
        onRow={() => ({ align: 'center' })}
        pagination={{ defaultPageSize: 3 }}
        tableLayout='auto'
        loading={loadCartItemsLoading}
      />
    </>
  )
}

export default CartDetails
