import React from 'react';
import { useSelector } from 'react-redux';
import StyledLink from '../../utils/StyledLink'
import { Menu, Badge } from 'antd';
import styled from 'styled-components'

const Title = styled.span`
  margin: 0 5px
`

function LeftMenu(props) {

  const { currentUser } = useSelector(state => state.user)

  return (
    <Menu mode={props.mode}>
      <Menu.Item><StyledLink to='/'>HOME</StyledLink></Menu.Item>
      <Menu.SubMenu title={<Title>블로그</Title>}>
        <Menu.Item key="blog" >
          {<StyledLink to='/blog'>블로그</StyledLink>}
        </Menu.Item>
        <Menu.Item key="blog/create" disabled={!currentUser?.isAuth} >
          {<StyledLink to='/blog/create'>작성하기</StyledLink>}
        </Menu.Item>
      </Menu.SubMenu>

      <Menu.SubMenu title={<Title>영화</Title>}>
        <Menu.Item key="movieTrend">
          {<StyledLink to='/movieTrend'>트렌드</StyledLink>}
        </Menu.Item>
        <Menu.Item key="movieTrend/favorite" disabled={!currentUser?.isAuth} >
          {<StyledLink to='/movieTrend/favorite'>즐겨찾기</StyledLink>}
        </Menu.Item>
      </Menu.SubMenu>

      <Menu.SubMenu title={<Title>채팅</Title>}>
        <Menu.Item key="talkative" >
          {<StyledLink to='/talkative'>토커팁</StyledLink>}
        </Menu.Item>
      </Menu.SubMenu>

      <Menu.SubMenu
        title={currentUser?.cart?.length
          ? <Badge dot showZero={false} offset={[-13, 0]}>
            <Title>쇼핑</Title>
          </Badge>
          : <Title>쇼핑</Title>}
      >
        <Menu.Item key="jaymall">
          {<StyledLink to='/jaymall'>제이몰</StyledLink>}
        </Menu.Item>
        <Menu.Item key="cart" disabled={!currentUser?.isAuth} >
          <StyledLink to='/jaymall/cart'>
            장바구니<Badge size='small' count={currentUser?.cart?.length} showZero={false} offset={[0, -10]} />
          </StyledLink>
        </Menu.Item>
        <Menu.Item key="product" disabled={!currentUser?.isAuth} >
          {<StyledLink to='/jaymall/upload'>상품등록</StyledLink>}
        </Menu.Item>
      </Menu.SubMenu>

      <Menu.SubMenu title={<Title>유투브</Title>}>
        <Menu.Item key="jaytube" disabled>
          {<StyledLink to='/jaytube'>유투브</StyledLink>}
        </Menu.Item>
      </Menu.SubMenu>

      <Menu.SubMenu title={<Title>트위터</Title>}>
        <Menu.Item key="jaytweet" disabled>
          {<StyledLink to='/jaytweet'>트위터</StyledLink>}
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  )
}

export default LeftMenu
