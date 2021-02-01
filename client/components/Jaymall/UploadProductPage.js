import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { Form, Input, InputNumber, Button, Typography, Select, message as Message, Space } from 'antd';
import FileUploader from './File/FileUploader'
import { RESET_UPLOAD_IMAGE, UPLOAD_PRODUCT_REQUEST, SET_ALL_FILTERS_INFO } from '../../reducers/types'
import { ProductClothesSort, ProductAccessorySort } from './utils/ProductSort'

const { Title } = Typography;

function UploadProductPage() {

  const history = useHistory();
  const { currentUser } = useSelector(state => state.user)
  const { fileData, uploadProductDone, uploadProductLoading, uploadProductError, uploadImageLoading, mesasge } = useSelector(state => state.jaymall)
  const dispatch = useDispatch();

  useEffect(() => {
    if (uploadProductError) {
      Message.error({ content: mesasge, duration: 2 });
    }
    if (uploadProductDone) {
      Message.success({ content: '상품이 정상적으로 등록되었습니다.', duration: 2 });
      setTimeout(() => {
        dispatch({
          type: RESET_UPLOAD_IMAGE,
        })
        history.push('/jaymall')
      }, 2000)
    }
  }, [dispatch, uploadProductDone, history, mesasge, uploadProductError])

  const onFinish = (values) => {
    const payload = {
      writer: currentUser._id,
      ...values,
      images: fileData
    }
    dispatch({
      type: UPLOAD_PRODUCT_REQUEST,
      payload
    })
  };

  const handleHistory = () => {
    dispatch({
      type: SET_ALL_FILTERS_INFO,
      payload: {
        skip: 0,
        limit: 8,
      }
    })
    history.goBack(1);
  }

  const renderProductClothSort = useMemo(() => (
    ProductClothesSort.map((value) => {
      return (
        <Select.Option key={uuidv4()} value={value}>{value}</Select.Option>
      )
    })
  ), [])

  const renderAccessoryClothSort = useMemo(() => (
    ProductAccessorySort.map((value) => {
      return (
        <Select.Option key={uuidv4()} value={value}>{value}</Select.Option>
      )
    })
  ), [])

  const rootDivWrapperStyle = useMemo(() => ({ maxWidth: 700, margin: '3rem auto' }), [])
  const titleDivWrapperStyle = useMemo(() => ({ alignItems: 'center', margin: '100px 0' }), [])
  const titleStyle = useMemo(() => ({ textAlign: 'center', margin: 30 }), [])
  const formLabelColStyle = useMemo(() => ({ span: 8 }), [])
  const formLabelWrapperColStyle = useMemo(() => ({ span: 16 }), [])
  const formStyle = useMemo(() => ({ maxWidth: 600 }), [])
  const formTitleRules = useMemo(() => ([
    { required: true, message: '상품명을 입력해주세요.' },
  ]), [])
  const formDescriptionRules = useMemo(() => ([
    { required: true, message: '상품 설명을 입력해주세요.' },
    { min: 10, message: '상품 설명은 10자 이상으로 입력해주세요.' },
  ]), [])
  const inputTextDescriptionStyle = useMemo(() => ({ minHeight: 150 }), [])
  const formPriceRules = useMemo(() => ([
    { required: true, message: '상품 가격을 입력해주세요.' },
    { type: 'number', min: 1, message: '가격은 0원 보다 높아야합니다.' },
    { type: 'number', max: 100000000, message: '우리 쇼핑몰은 1억원 이하의 상품만 거래합니다.' },
  ]), [])
  const inputNumberStyle = useMemo(() => ({ width: 140, alignItems: 'end' }), [])
  const formSortRules = useMemo(() => ([
    { required: true, message: '상품 종류를 선택해주세요.' },
  ]), [])


  return (
    <div style={rootDivWrapperStyle}>
      <div style={titleDivWrapperStyle}>
        <Title level={3} style={titleStyle} >Jaymall 상품 등록</Title>
        <FileUploader />
        <br />

        <Form
          name="nest-messages"
          labelCol={formLabelColStyle}
          wrapperCol={formLabelWrapperColStyle}
          style={formStyle}
          onFinish={onFinish} >
          <Form.Item
            name='title'
            label="상품명"
            rules={formTitleRules}
          >
            <Input placeholder='상품명' />
          </Form.Item>

          <Form.Item
            name='description'
            label="상품 설명"
            rules={formDescriptionRules}
          >
            <Input.TextArea style={inputTextDescriptionStyle} placeholder='상품 설명' />
          </Form.Item>

          <Form.Item
            name='price'
            label="가격"
            rules={formPriceRules}
          >
            <InputNumber
              style={inputNumberStyle}
              formatter={value => value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={value => value.replace(/(,*)/g, '')}
              placeholder='가격'
            />
          </Form.Item>

          <Form.Item
            name='sort'
            label="종류"
            rules={formSortRules}
          >
            <Select placeholder='상품 종류' >
              <Select.OptGroup label="의류">
                {renderProductClothSort}
              </Select.OptGroup>
              <Select.OptGroup label="잡화">
                {renderAccessoryClothSort}
              </Select.OptGroup>
            </Select>
          </Form.Item>

          <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
            <Space>
              <Button type="primary" htmlType="submit" disabled={uploadProductLoading || uploadImageLoading}>
                상품 등록
              </Button>
              <Button onClick={handleHistory}>
                취소
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div >
  )
}

export default withRouter(UploadProductPage)
