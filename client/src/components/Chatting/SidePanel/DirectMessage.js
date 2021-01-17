import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { Badge, Typography } from 'antd'
import { CoffeeOutlined, RedoOutlined } from '@ant-design/icons'
import { LOAD_CHAT_USERS_REQUEST, SET_CURRENT_DIRECT_ROOM } from '../../../reducers/types'
const { Title } = Typography;

function DirectMessage() {

  const dispatch = useDispatch();
  const { currentUser } = useSelector(state => state.user)
  const { chatUsers, currentChatRoom, loadChatUsersDone } = useSelector(state => state.chat)

  const handleCurrentRoom = (directRoom) => () => {
    dispatch({
      type: SET_CURRENT_DIRECT_ROOM,
      payload: directRoom,
    })
  }

  const renderSelected = (directRoom) => {
    if (directRoom === currentChatRoom._id) {
      return 'gray'
    }
    return ''
  }

  const renderRirectMessages = chatUsers?.map(user => (
    <div key={uuidv4()} onClick={handleCurrentRoom(user.directRoom)}
      style={{
        backgroundColor: renderSelected(user.directRoom),
        margin: '0.2rem',
        padding: '0.2rem',
        borderRadius: '0.3rem'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {`# ${user.name}`}
        <Badge dot={user.token} color={user.token ? '#22d100' : 'grey'} />
      </div>
    </div>
  ))

  const renderEmptyMessages = (<div style={{ color: 'gray' }}>
    로그인해주세요.
  </div>)

  const handleRerender = () => {
    if (currentUser.isAuth) {
      dispatch({
        type: LOAD_CHAT_USERS_REQUEST
      })
    }
  }

  return (
    <div>
      <Title level={5} style={{ color: 'white' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>
            <CoffeeOutlined />{chatUsers ? ` DirectMessage [${chatUsers?.length}] ` : ` DirectMessage [0] `}
          </span>
          <RedoOutlined style={{ marginTop: 5, marginRight: 7 }}
            onClick={handleRerender} />
        </div>

      </Title>
      {loadChatUsersDone && (chatUsers ? renderRirectMessages : renderEmptyMessages)}
    </div>
  )
}

export default DirectMessage
