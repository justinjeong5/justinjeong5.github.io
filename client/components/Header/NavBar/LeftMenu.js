import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link'
import { Menu } from 'antd';
import { v4 as uuidv4 } from 'uuid'

const { Item, SubMenu } = Menu;

function LeftMenu(props) {

  const { currentUser } = useSelector(state => state.user)

  return (
    <Menu mode={props.mode}>
      <Item><Link href='/'><a>HOME</a></Link></Item>
      <SubMenu key={uuidv4()} title={<span>블로그</span>}>
        <Item key={uuidv4()} >
          {<Link href='/blog'><a>블로그</a></Link>}
        </Item>
        <Item key={uuidv4()} disabled={!currentUser?.isAuth} >
          {<Link href='/blog/create'><a>작성하기</a></Link>}
        </Item>
      </SubMenu>

      <SubMenu key={uuidv4()} title={<span>영화</span>}>
        <Item disabled key={uuidv4()}>
          {<Link href='/' target="_blank" rel="noreferrer noopener"><a>트렌드</a></Link>}
        </Item>
      </SubMenu>
    </Menu >
  )
}

export default LeftMenu
