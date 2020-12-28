import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Container, Row, Col, Image, Spinner } from 'react-bootstrap'
import { FaLock, FaUnlock } from 'react-icons/fa'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import firebase from '../../../config/firebase'

function MessageHeader() {

  const [isFavorited, setIsFavorite] = useState(false)
  const { currentChatRoom, currentChatUser, isPrivateChatRoom } = useSelector(state => state.chat)
  const userRef = firebase.database().ref('users');

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
        </Container>
      }
    </div >)
}

export default MessageHeader
