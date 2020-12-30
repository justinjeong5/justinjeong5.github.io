import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col, Image, Spinner, InputGroup, FormControl, DropdownButton, Dropdown, Media } from 'react-bootstrap'
import { FaLock, FaUnlock } from 'react-icons/fa'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import { v4 as uuidv4 } from 'uuid'
import firebase from '../../../config/firebase'
import { SET_USER_POSTS } from '../../../reducers/types'

function MessageHeader({ handleSearchChange }) {

  const [isFavorited, setIsFavorite] = useState(false)
  const { currentChatRoom, currentChatUser, isPrivateChatRoom, userPosts } = useSelector(state => state.chat)
  const userRef = firebase.database().ref('users');
  const messagesRef = firebase.database().ref('messages');
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentChatRoom && currentChatUser) {
      addFavoriteListener(currentChatRoom.id, currentChatUser.userId);
    }
  }, [currentChatRoom, currentChatUser])

  const addFavoriteListener = (roomId, userId) => {
    userRef
      .child(userId)
      .child('favorited')
      .once('value')
      .then((data) => {
        if (data.val()) {
          const chatRoomIds = Object.keys(data.val());
          const isAlreadyFavorited = chatRoomIds.includes(roomId);
          setIsFavorite(isAlreadyFavorited);
        }
      })
  }

  const handleFavorite = () => {
    if (isFavorited) {
      userRef.child(`${currentChatUser.userId}/favorited`)
        .child(currentChatRoom.id)
        .remove(error => {
          if (error) {
            console.error(error);
          }
        })
    } else {
      userRef.child(`${currentChatUser.userId}/favorited`)
        .update({
          [currentChatRoom.id]: {
            name: currentChatRoom.name,
            description: currentChatRoom.description,
            createdBy: {
              name: currentChatRoom.createdBy.name,
              image: currentChatRoom.createdBy.image
            }
          }
        })
    }
    setIsFavorite(prevFavorited => !prevFavorited);
  }

  const renderUserPosts = (userPosts) => {
    return Object.entries(userPosts)
      .sort((a, b) => { return b[1].count - a[1].count })
      .map(([_, user]) => {
        return (<Dropdown.Item key={uuidv4()}>
          <Media >
            <Image
              roundedCircle
              style={{ width: 20, height: 20, marginRight: 7 }}
              src={user.image}
              alt={user.name} />
            <Media.Body>
              <h6>{`${user.name} ${user.count}개`}</h6>
            </Media.Body>
          </Media>
        </Dropdown.Item>)
      })
  }

  const handleUserPosts = () => {
    messagesRef.child(currentChatRoom.id).on('value', (DataSnapShot) => {
      userPostsCount(Object.entries(DataSnapShot.val()));
    })
  }

  const userPostsCount = (messages) => {
    let usersPosts = messages.reduce((acc, message) => {
      if (message[1].user.id in acc) {
        acc[message[1].user.id].count += 1;
      }
      else {
        acc[message[1].user.id] = {
          image: message[1].user.image,
          name: message[1].user.name,
          count: 1,
        }
      }
      return acc;
    }, {})
    dispatch({
      type: SET_USER_POSTS,
      payload: usersPosts,
    })
  }

  return (
    <div style={{
      width: '100%',
      height: '100%',
      padding: '1rem',
      marginBottom: '1rem'
    }}>
      {!currentChatRoom
        ? <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '130px' }}>
          <Spinner animation="border" role="status" />
        </div>
        : <Container>
          <Row>
            <Col >
              <h3 style={{ display: 'flex', justifyContent: 'space-between' }}>
                {` ${currentChatRoom?.name} `}
                <div>
                  {!isPrivateChatRoom &&
                    <span style={{ cursor: 'pointer' }} onClick={handleFavorite}>
                      {isFavorited
                        ? < AiFillStar style={{ marginBottom: 5 }} />
                        : < AiOutlineStar style={{ marginBottom: 5 }} />}
                    </span>}
                  {isPrivateChatRoom
                    ? <FaLock style={{ marginBottom: 5 }} />
                    : <FaUnlock style={{ marginBottom: 5 }} />}
                </div>
              </h3>
              <p>{currentChatRoom?.description}</p>
            </Col>
            <Col lg={3}>
              <div style={{ float: 'right' }}>
                {currentChatRoom?.createdBy && <p>
                  <Image
                    roundedCircle
                    style={{ width: 30, height: 30, marginBottom: 3, marginRight: 5 }}
                    src={currentChatRoom.createdBy.image}
                    alt={currentChatRoom.createdBy.name}
                  />
                  {currentChatRoom.createdBy.name}
                </p>}
              </div>
            </Col>
          </Row>
          <Row>
            <Col >
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1"> <BsSearch /></InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  onChange={handleSearchChange}
                  placeholder="메세지 검색"
                  aria-label="search"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Col>
            <Col lg={3}>
              <DropdownButton style={{ padding: '0 1rem' }} menuAlign="right" title="대화 개수" variant="secondary" onClick={handleUserPosts}>
                {userPosts && renderUserPosts(userPosts)}
                <Dropdown.Divider />
                {userPosts &&
                  <Dropdown.Item key={uuidv4()}>{`총 ${Object.entries(userPosts).length}명`}</Dropdown.Item>
                }
              </DropdownButton>
            </Col>
          </Row>

        </Container>
      }
    </div >)
}

export default MessageHeader
