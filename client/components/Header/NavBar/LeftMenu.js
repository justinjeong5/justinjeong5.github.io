import React from 'react';
import { useSelector } from 'react-redux';
import { Menu, Badge } from 'antd';
import styled from 'styled-components'
import Link from 'next/link'
import StyledSubMenu from '../../utils/StyledSubMenu'

const { Item } = Menu;

const Title = styled.span`
  margin: 0 5px
`

function LeftMenu(props) {

  const { currentUser } = useSelector(state => state.user)

  return (
    <Menu mode={props.mode}>
      <Item><Link href='/'><a>HOME</a></Link></Item>
      <StyledSubMenu title={<Title>블로그</Title>}>
        <Item key="blog" >
          {<Link href='/blog'><a>블로그</a></Link>}
        </Item>
        <Item key="blog/create" disabled={!currentUser?.isAuth} >
          {<Link href='/blog/create'><a>작성하기</a></Link>}
        </Item>
      </StyledSubMenu>

      <StyledSubMenu title={<Title>영화</Title>}>
        <Item key="movieTrend">
          {<Link href='/movieTrend'><a>트렌드</a></Link>}
        </Item>
        <Item key="movieTrend/favorite" disabled={!currentUser?.isAuth} >
          {<Link href='/movieTrend/favorite'><a>즐겨찾기</a></Link>}
        </Item>
      </StyledSubMenu>

      <StyledSubMenu title={<Title>채팅</Title>}>
        <Item key="talkative" >
          {<Link href='/talkative'><a>토커팁</a></Link>}
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
          {<Link href='/jaymall'><a>제이몰</a></Link>}
        </Item>
        <Item key="cart" disabled={!currentUser?.isAuth} >
          <Link href='/jaymall/cart'><a>
            장바구니<Badge size='small' count={currentUser?.cart?.length} showZero={false} offset={[0, -10]} />
          </a></Link>
        </Item>
        <Item key="product" disabled={!currentUser?.isAuth} >
          {<Link href='/jaymall/upload'><a>상품등록</a></Link>}
        </Item>
      </StyledSubMenu>

      <StyledSubMenu title={<Title>유투브</Title>}>
        <Item key="jaytube" disabled>
          {<Link href='/jaytube'><a>유투브</a></Link>}
        </Item>
      </StyledSubMenu>

      <StyledSubMenu title={<Title>트위터</Title>}>
        <Item key="tweeter" >
          {<a href="https://tweeter.shinywaterjeong.com" target="_blank" rel="noreferrer noopener">트위터</a>}
        </Item>
      </StyledSubMenu>
    </Menu >
  )
}

export default LeftMenu
