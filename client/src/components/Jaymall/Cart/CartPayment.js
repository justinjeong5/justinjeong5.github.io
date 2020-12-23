import React from 'react'
import { Button, message as Message, Space } from 'antd'

function CartPayment() {

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Space>
        <Button type='primary' onClick={() => { return Message.error('아직 일반 결제 기능은 지원하지 않습니다.') }}>일반결제</Button>
        <Button type='default' onClick={() => { return Message.error('아직 네이버페이는 지원하지 않습니다.') }}>네이버페이</Button>
        <Button type='ghost' onClick={() => { return Message.error('아직 카카오페이는 지원하지 않습니다.') }}>카카오페이</Button>
        <Button type='ghost' onClick={() => { return window.history.back() }}>취소</Button>
      </Space>
    </div >
  )
}

export default CartPayment
