import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid';
import firebase from '../../../config/firebase'

function MessageForm() {
  const [content, setContent] = useState('');
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false)
  const { currentChatRoom, currentChatUser } = useSelector(state => state.chat)

  const messagesRef = firebase.database().ref('messages');
  const typingRef = firebase.database().ref('typing');

  const handleChange = (event) => {
    setContent(event.target.value);
  }

  const createMessage = (fileURL = null) => {
    const message = {
      timestamp: firebase.database.ServerValue.TIMESTAMP,
      user: {
        id: currentChatUser.userId,
        name: currentChatUser.name,
        image: currentChatUser.image,
      },
    };
    if (fileURL) {
      message['image'] = fileURL;
    } else {
      message['content'] = content;
    }
    return message;
  }

  const handleSubmit = async () => {
    if (loading) return;
    if (!content.trim()) return;
    setLoading(true);
    // firebase에 메세지를 저장하는 부분
    try {
      await messagesRef.child(currentChatRoom.id).push().set(createMessage())
      typingRef.child(currentChatRoom.id).child(currentChatUser.userId).remove();
      setContent('');
      setErrors([]);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setErrors(prev => prev.concat(error.message))
      setLoading(false);
      setTimeout(() => {
        setErrors([]);
      }, 2000)
    }
  }

  const handleKeyDown = (event) => {
    if ((event.shiftKey && event.key === 'Enter') || (event.ctrlKey && event.key === 'Enter')) {
      handleSubmit();
    }
    if (content.trim()) {
      typingRef.child(currentChatRoom.id).child(currentChatUser.userId).set(currentChatUser.name)
    } else {
      typingRef.child(currentChatRoom.id).child(currentChatUser.userId).remove();
    }
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Control
            value={content}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            as="textarea"
            rows={3} />
        </Form.Group>
      </Form>
      <div>
        {errors && errors.map(errorMessage =>
          (<p style={{ color: 'red' }} key={uuidv4()} >{errorMessage}</p>))
        }
      </div>
      <div style={{ float: 'right' }}>
        <Button variant="primary" onClick={handleSubmit} disabled={loading} style={{ marginRight: 10 }}>보내기</Button>
      </div>
    </div>
  )
}

export default MessageForm
