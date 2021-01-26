import React from 'react';
import { useSelector } from 'react-redux';
import { Menu, Badge } from 'antd';
import styled from 'styled-components'
import StyledLink from '../../utils/StyledLink'
import StyledSubMenu from '../../utils/StyledSubMenu'

const { Item } = Menu;

const Title = styled.span`
  margin: 0 5px
`

function LeftMenu(props) {

  const { currentUser } = useSelector(state => state.user)

  return (
    <Menu mode={props.mode}>
      <Item><StyledLink to='/'>HOME</StyledLink></Item>
      <StyledSubMenu title={<Title>블로그</Title>}>
        <Item key="blog" >
          {<StyledLink to='/blog'>블로그</StyledLink>}
        </Item>
        <Item key="blog/create" disabled={!currentUser?.isAuth} >
          {<StyledLink to='/blog/create'>작성하기</StyledLink>}
        </Item>
      </StyledSubMenu>

      <StyledSubMenu title={<Title>영화</Title>}>
        <Item key="movieTrend">
          {<StyledLink to='/movieTrend'>트렌드</StyledLink>}
        </Item>
        <Item key="movieTrend/favorite" disabled={!currentUser?.isAuth} >
          {<StyledLink to='/movieTrend/favorite'>즐겨찾기</StyledLink>}
        </Item>
      </StyledSubMenu>

      <StyledSubMenu title={<Title>채팅</Title>}>
        <Item key="talkative" >
          {<StyledLink to='/talkative'>토커팁</StyledLink>}
        </Item>
      </StyledSubMenu>

      <StyledSubMenu popupOffset={[0, 2]}
        title={currentUser?.cart?.length
          ? <Badge dot showZero={false} offset={[0, 0]}>
            <Title>쇼핑</Title>
          </Badge>
          : <Title>쇼핑</Title>}
      >
        <Item key="jaymall">
          {<StyledLink to='/jaymall'>제이몰</StyledLink>}
        </Item>
        <Item key="cart" disabled={!currentUser?.isAuth} >
          <StyledLink to='/jaymall/cart'>
            장바구니<Badge size='small' count={currentUser?.cart?.length} showZero={false} offset={[0, -10]} />
          </StyledLink>
        </Item>
        <Item key="product" disabled={!currentUser?.isAuth} >
          {<StyledLink to='/jaymall/upload'>상품등록</StyledLink>}
        </Item>
      </StyledSubMenu>

      <StyledSubMenu title={<Title>유투브</Title>}>
        <Item key="jaytube" disabled>
          {<StyledLink to='/jaytube'>유투브</StyledLink>}
        </Item>
      </StyledSubMenu>

      <StyledSubMenu title={<Title>트위터</Title>}>
        <Item key="tweeter" >
          {<StyledLink to='/tweeter'>트위터</StyledLink>}
        </Item>
      </StyledSubMenu>
    </Menu>
  )
}

export default LeftMenu
