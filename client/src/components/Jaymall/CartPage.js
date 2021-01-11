import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Result, Typography } from 'antd';
import NumberFormat from 'react-number-format'
import { LOAD_CART_ITEMS_REQUEST } from '../../reducers/types'
import CartDetails from './Cart/CartDetails';
import CartPayment from './Cart/CartPayment';

const { Title } = Typography;

function CartPage() {

  const [priceToPay, setPriceToPay] = useState(0)
  const dispatch = useDispatch();
  const { cartWithDetail, currentUser, loadCartItemsDone, removeCartItemDone } = useSelector(state => state.user);

  useEffect(() => {
    if (currentUser?.cart) {
      const cartItems = currentUser.cart.map(value => value.id)
      dispatch({
        type: LOAD_CART_ITEMS_REQUEST,
        payload: cartItems
      })
    }
  }, [dispatch, currentUser, removeCartItemDone])

  useEffect(() => {
    if (cartWithDetail) {
      setPriceToPay(0);
      cartWithDetail.forEach((item) => {
        setPriceToPay(prev => prev + item.totalPrice);
      })
    }
  }, [cartWithDetail, loadCartItemsDone])

  return (
    <div style={{ width: '80%', margin: '3rem auto', marginTop: 100 }}>
      <Title level={3}>장바구니</Title>
      <CartDetails />
      {!<Result status='success' title='구매가 정상적으로 완료되었습니다.' />}
      {cartWithDetail?.length > 0 &&
        <>
          <Title level={4}> 결제할 금액</Title>
          <NumberFormat value={priceToPay} displayType={'text'} thousandSeparator={true} suffix={'원'} />
          <CartPayment />
        </>
      }
    </div>
  )
}

export default CartPage
