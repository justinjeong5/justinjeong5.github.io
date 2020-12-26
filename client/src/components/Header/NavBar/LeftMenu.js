import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu, Badge } from 'antd';
import styled from 'styled-components'

const Title = styled.span`
  margin: 0 15px
`

function LeftMenu(props) {

  const { currentUser } = useSelector(state => state.user)

  return (
    <Menu mode={props.mode}>
      <Menu.Item><Link to='/'>HOME</Link></Menu.Item>
      <Menu.SubMenu title={<Title>블로그</Title>}>
        <Menu.Item key="blog" >
          {<Link to='/blog'>블로그</Link>}
        </Menu.Item>
        <Menu.Item key="blog/create" disabled={!currentUser?.isAuth} >
          {<Link to='/blog/create'>작성하기</Link>}
        </Menu.Item>
      </Menu.SubMenu>

      <Menu.SubMenu title={<Title>영화</Title>}>
        <Menu.Item key="movieTrend">
          {<Link to='/movieTrend'>트렌드</Link>}
        </Menu.Item>
        <Menu.Item key="movieTrend/favorite" disabled={!currentUser?.isAuth} >
          {<Link to='/movieTrend/favorite'>즐겨찾기</Link>}
        </Menu.Item>
      </Menu.SubMenu>

      <Menu.SubMenu title={<Title>채팅</Title>}>
        <Menu.Item key="justinTalk" disabled>
          {<Link to='/justinTalk'>채팅</Link>}
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
          {<Link to='/jaymall'>제이몰</Link>}
        </Menu.Item>
        <Menu.Item key="cart" disabled={!currentUser?.isAuth} >
          <Link to='/jaymall/cart'>
            장바구니<Badge size='small' count={currentUser?.cart?.length} showZero={false} offset={[0, -10]} />
          </Link>
        </Menu.Item>
        <Menu.Item key="product" disabled={!currentUser?.isAuth} >
          {<Link to='/jaymall/upload'>상품등록</Link>}
        </Menu.Item>
      </Menu.SubMenu>

      <Menu.SubMenu title={<Title>유투브</Title>}>
        <Menu.Item key="jaytube" disabled>
          {<Link to='/jaytube'>유투브</Link>}
        </Menu.Item>
      </Menu.SubMenu>

      <Menu.SubMenu title={<Title>트위터</Title>}>
        <Menu.Item key="jaytweet" disabled>
          {<Link to='/jaytweet'>트위터</Link>}
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  )
}

export default LeftMenu
