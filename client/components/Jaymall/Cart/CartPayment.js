import React, { useCallback, useMemo } from 'react'
import { Button, message as Message, Space } from 'antd'
import { useHistory } from 'react-router-dom'

function CartPayment() {
  const history = useHistory();

  const handlePay = useCallback(() => {
    return Message.error('아직 일반 결제 기능은 지원하지 않습니다.')
  }, [])

  const handleNaverPay = useCallback(() => {
    return Message.error('아직 네이버페이는 지원하지 않습니다.')
  }, [])

  const handleKakaoPay = useCallback(() => {
    return Message.error('아직 카카오페이는 지원하지 않습니다.')
  }, [])

  const handleCancel = useCallback(() => {
    history.goBack()
  }, [])

  const spaceStyle = useMemo(() => ({ display: 'flex', justifyContent: 'center' }), [])

  return (
    <Space style={spaceStyle}>
      <Button type='primary' onClick={handlePay}>일반결제</Button>
      <Button type='default' onClick={handleNaverPay}>네이버페이</Button>
      <Button type='ghost' onClick={handleKakaoPay}>카카오페이</Button>
      <Button type='ghost' onClick={handleCancel}>취소</Button>
    </Space>
  )
}

export default CartPayment
