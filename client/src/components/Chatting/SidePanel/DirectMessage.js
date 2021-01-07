import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { Badge, Typography } from 'antd'
import { CoffeeOutlined, RedoOutlined } from '@ant-design/icons'
import { LOAD_CHAT_USERS_REQUEST, SET_CURRENT_DIRECT_ROOM } from '../../../reducers/types'
const { Title } = Typography;

function DirectMessage() {

  const dispatch = useDispatch();
  const { chatUsers, currentChatRoom, loadChatUsersDone } = useSelector(state => state.chat)

  const handleCurrentRoom = (roomId) => () => {
    dispatch({
      type: SET_CURRENT_DIRECT_ROOM,
      payload: roomId,
    })
  }

  const renderSelected = (roomId) => {
    if (roomId === currentChatRoom._id) {
      return 'gray'
    }
    return ''
  }

  const renderRirectMessages = chatUsers.map(user => (
    <div key={uuidv4()} onClick={handleCurrentRoom(user._id)}
      style={{
        backgroundColor: renderSelected(user._id),
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

  return (
    <div>
      <Title level={5} style={{ color: 'white' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>
            <CoffeeOutlined />{` DirectMessage [${chatUsers?.length}] `}
          </span>
          <RedoOutlined style={{ marginTop: 5, marginRight: 7 }}
            onClick={() => {
              dispatch({
                type: LOAD_CHAT_USERS_REQUEST
              })
            }} />
        </div>

      </Title>
      {loadChatUsersDone && renderRirectMessages}
    </div>
  )
}

export default DirectMessage
