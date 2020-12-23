import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import styled from 'styled-components'

const Title = styled.span`
  margin: 0 15px
`

function LeftMenu(props) {

  return (
    <Menu mode={props.mode}>
      <Menu.Item><Link to='/'>HOME</Link></Menu.Item>
      <Menu.SubMenu title={<Title>블로그</Title>}>
        <Menu.Item key="blog" disabled>
          {<Link to='/blog'>블로그</Link>}
        </Menu.Item>
      </Menu.SubMenu>

      <Menu.SubMenu title={<Title>영화</Title>}>
        <Menu.Item key="movieTrend">
          {<Link to='/movieTrend'>트렌드</Link>}
        </Menu.Item>
        <Menu.Item key="movieTrend/favorite">
          {<Link to='/movieTrend/favorite'>즐겨찾기</Link>}
        </Menu.Item>
      </Menu.SubMenu>

      <Menu.SubMenu title={<Title>채팅</Title>}>
        <Menu.Item key="justinTalk" disabled>
          {<Link to='/justinTalk'>채팅</Link>}
        </Menu.Item>
      </Menu.SubMenu>

      <Menu.SubMenu title={<Title>쇼핑</Title>}>
        <Menu.Item key="jaymall" disabled>
          {<Link to='/jaymall'>쇼핑</Link>}
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
