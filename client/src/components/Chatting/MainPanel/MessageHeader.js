import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Row, Col, Image, Spinner } from 'react-bootstrap'

function MessageHeader() {

  const { currentChatRoom } = useSelector(state => state.chat)

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
              <h3>{currentChatRoom?.name}</h3>
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
