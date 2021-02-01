import React, { useCallback, useMemo, useState } from 'react';
import Link from 'next/link'
import { Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons'
import LeftMenu from './NavBar/LeftMenu';
import RightMenu from './NavBar/RightMenu';

function NavBar() {
  const [visible, setVisible] = useState(false)

  const showDrawer = useCallback(() => {
    setVisible(true)
  }, []);

  const onClose = useCallback(() => {
    setVisible(false)
  }, [])

  const navStyle = useMemo(() => ({ position: 'fixed', top: 0, zIndex: 5, width: '100%' }), [])

  return (
    <nav className="menu" style={navStyle}>
      <div className="menu__container">
        <div className="menu_left">
          <LeftMenu mode="horizontal" />
        </div>
        <div className="menu_rigth">
          <RightMenu mode="horizontal" />
        </div>
        <div className="menu__mobile-title">
          <Link href='/'><a>HOME</a></Link>
        </div>
        <Button
          className="menu__mobile-button"
          type="primary"
          onClick={showDrawer}
        >
          <MenuOutlined />
        </Button>
        <Drawer
          title="JustinJeong5.github.io"
          placement="right"
          className="menu_drawer"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <LeftMenu mode="inline" />
          <RightMenu mode="inline" />
        </Drawer>
      </div>
    </nav>
  )
}

export default NavBar