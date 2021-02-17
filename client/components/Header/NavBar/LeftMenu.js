import React from 'react';
import Link from 'next/link'
import { Menu } from 'antd';
import { v4 as uuidv4 } from 'uuid'

function LeftMenu(props) {

  return (
    <Menu mode={props.mode}>
      <Menu.Item>
        <Link href='/'><a>HOME</a></Link>
      </Menu.Item>

      <Menu.Item>
        {<Link href='/blog'><a>블로그</a></Link>}
      </Menu.Item>
    </Menu >
  )
}

export default LeftMenu
