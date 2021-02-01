import React from 'react';
import styled from 'styled-components';
import { Menu } from 'antd'

const StyledSubMenu = styled(Menu.SubMenu)``;

export default (props) => <StyledSubMenu popupOffset={[0, 2]} {...props} />;
