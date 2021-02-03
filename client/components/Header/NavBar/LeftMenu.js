import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link'
import { Menu, Badge } from 'antd';
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

      <SubMenu key={uuidv4()} title={<span>채팅</span>}>
        <Item key={uuidv4()}>
          {<Link href='/talkative'><a>토커팁</a></Link>}
        </Item>
      </SubMenu >

      <SubMenu
        key={uuidv4()}
        title={currentUser?.cart?.length
          ? <Badge dot showZero={false}>
            <span>쇼핑</span>
          </Badge>
          : <span>쇼핑</span>}
      >
        <Item key={uuidv4()}>
          {<Link href='/jaymall'><a>제이몰</a></Link>}
        </Item>
        <Item key={uuidv4()} disabled={!currentUser?.isAuth} >
          <Link href='/jaymall/cart'>
            <a>
              장바구니<Badge size='small' count={currentUser?.cart?.length} showZero={false} offset={[0, -10]} />
            </a>
          </Link>
        </Item >
        <Item key={uuidv4()} disabled={!currentUser?.isAuth} >
          {< Link href='/jaymall/upload'><a>상품등록</a></Link >}
        </Item >
      </SubMenu >

      <SubMenu key={uuidv4()} title={<span>유투브</span>}>
        <Item key={uuidv4()} disabled>
          {<Link href='/jaytube'><a>유투브</a></Link>}
        </Item>
      </SubMenu >

      <SubMenu key={uuidv4()} title={<span>트위터</span>}>
        <Item key={uuidv4()}>
          {<a href="https://tweeter.shinywaterjeong.com" target="_blank" rel="noreferrer noopener">트위터</a>}
        </Item>
      </SubMenu >
    </Menu >
  )
}

export default LeftMenu
