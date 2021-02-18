import React from 'react';
import Link from '../../utils/Link'
import { Menu } from 'antd';

function LeftMenu(props) {

  return (
    <Menu mode={props.mode}>
      <Menu.Item>
        <Link href='/'><a>HOME</a></Link>
      </Menu.Item>

    </Menu >
  )
}

export default LeftMenu
