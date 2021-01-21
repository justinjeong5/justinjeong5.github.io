import React, { useMemo, useEffect, useState } from 'react'
import { Divider, Checkbox, Row, Col, Slider, Collapse, Input, Radio } from 'antd'
import { ShoppingOutlined } from '@ant-design/icons'
import { ProductClothesSort, ProductAccessorySort } from '../utils/ProductSort'
import styled from 'styled-components'

const marks = {
  0: '0원',
  100: '1,000,000원',
};

const StyledCol = styled(Col)`
  margin: auto
`

function ProductFilter(props) {

  const [trigger, setTrigger] = useState(false)
  const [priceRange, setPriceRange] = useState([0, 100])
  const [word, setWord] = useState('')
  const [orderBy, setOrderBy] = useState(1)
  const [sortBy, setSortBy] = useState('_id')

  const [checkedClothesList, setCheckedClothesList] = useState(ProductClothesSort);
  const [indeterminateClothes, setIndeterminateClothes] = useState(false);
  const [checkAllClothes, setCheckAllClothes] = useState(true);

  const [checkedAccessoryList, setCheckedAccessoryList] = useState(ProductAccessorySort);
  const [indeterminateAccessory, setIndeterminateAccessory] = useState(false);
  const [checkAllAccessory, setCheckAllAccessory] = useState(true);


  useEffect(() => {
    if (trigger) {
      const payload = {
        sort: [...checkedClothesList, ...checkedAccessoryList],
        price: [priceRange[0] * 10000, priceRange[1] * 10000],
        word,
        orderBy,
        sortBy,
      }
      props.onFilterChange(payload)
    }
    setTrigger(true)
  }, [checkedClothesList, checkedAccessoryList, priceRange, word, orderBy, sortBy])

  const onChangeClothes = list => {
    setCheckedClothesList(list);
    setIndeterminateClothes(!!list.length && list.length < ProductClothesSort.length);
    setCheckAllClothes(list.length === ProductClothesSort.length);
  };

  const onCheckAllClothesChange = e => {
    setCheckedClothesList(e.target.checked ? ProductClothesSort : []);
    setIndeterminateClothes(false);
    setCheckAllClothes(e.target.checked);
  };

  const onChangeAccessory = list => {
    setCheckedAccessoryList(list);
    setIndeterminateAccessory(!!list.length && list.length < ProductAccessorySort.length);
    setCheckAllAccessory(list.length === ProductAccessorySort.length);
  };

  const onCheckAllAccessoryChange = e => {
    setCheckedAccessoryList(e.target.checked ? ProductAccessorySort : []);
    setIndeterminateAccessory(false);
    setCheckAllAccessory(e.target.checked);
  };

  const onAfterChange = (value) => {
    setPriceRange(value)
  }

  const handleTipFormatter = (e) => {
    const price = e * 10000;
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원'
  }

  const handleChangeWord = (e) => {
    setWord(e.target.value);
  }

  const handleChangeOrderBy = (e) => {
    setOrderBy(e.target.value);
  }

  const handleChangeSortBy = (e) => {
    setSortBy(e.target.value);
  }

  const collapseStyle = useMemo(() => ({ marginBottom: '2rem' }), [])

  return (
    <Collapse style={collapseStyle}>
      <Collapse.Panel header="검색 필터">
        <Row gutter={[24, 24]}>
          <StyledCol span={10}>
            <Divider orientation="left" plain>
              의류
              </Divider>
            <Checkbox
              indeterminate={indeterminateClothes}
              onChange={onCheckAllClothesChange}
              checked={checkAllClothes}>
              모두 선택
              </Checkbox>
            <Checkbox.Group
              options={ProductClothesSort}
              value={checkedClothesList}
              onChange={onChangeClothes} />
          </StyledCol>
          <StyledCol span={10}>
            <Divider orientation="left" plain>
              잡화
              </Divider>
            <Checkbox
              indeterminate={indeterminateAccessory}
              onChange={onCheckAllAccessoryChange}
              checked={checkAllAccessory}>
              모두 선택
              </Checkbox>
            <Checkbox.Group
              options={ProductAccessorySort}
              value={checkedAccessoryList}
              onChange={onChangeAccessory} />
          </StyledCol>
          <StyledCol span={10}>
            <Divider orientation="left" plain>
              순서
              </Divider>
            <Radio.Group onChange={handleChangeOrderBy} value={orderBy}>
              <Radio value={1}>오름차순</Radio>
              <Radio value={-1}>내림차순</Radio>
            </Radio.Group>
          </StyledCol>
          <StyledCol span={10}>
            <Divider orientation="left" plain>
              기준
              </Divider>
            <Radio.Group onChange={handleChangeSortBy} value={sortBy}>
              <Radio value='_id'>등록일</Radio>
              <Radio value='price'>가격</Radio>
              <Radio value='views'>조회수</Radio>
              <Radio value='sold'>구매수</Radio>
            </Radio.Group>
          </StyledCol>
          <StyledCol span={22}>
            <Divider orientation="left" plain>
              가격
              </Divider>
            <Slider
              range
              step={1}
              marks={marks}
              defaultValue={[0, 100]}
              tooltipVisible
              tipFormatter={handleTipFormatter}
              onAfterChange={onAfterChange}
            />
          </StyledCol>
          <StyledCol span={22}>
            <Input.Search
              value={word}
              onChange={handleChangeWord}
              placeholder="상품의 이름이나 설명을 통해 검색하세요."
              prefix={<ShoppingOutlined />} enterButton />
          </StyledCol>
        </Row>
      </Collapse.Panel>
    </Collapse>
  )
}

export default ProductFilter
