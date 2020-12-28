import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { Form, ProgressBar, Button } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid';
import mime from 'mime-types'
import firebase from '../../../config/firebase'

function MessageForm() {
  const [content, setContent] = useState('');
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false)
  const [percentage, setPercentage] = useState(0);
  const { currentChatRoom, currentChatUser } = useSelector(state => state.chat)
  const inputOpenImageRef = useRef();

  const messagesRef = firebase.database().ref('messages');
  const storageRef = firebase.storage().ref('message');
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

  const handleOpenImageRef = () => {
    inputOpenImageRef.current.click();
  }

  const getPath = (fileName) => {
    return `/public/${fileName}`;
  }

  const handleUploadImage = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    setLoading(true);

    const filePath = getPath(file.name);

    const metadata = { contentType: mime.lookup(mime.name) }
    try {
      // 파일을 스토리지에 저장
      const uploadTask = storageRef.child(filePath).put(file, metadata);

      // 파일 저장되는 percentage 구하기
      uploadTask.on('state_changed',
        (UploadTaskSnapshot) => {
          const percentage = Math.round(UploadTaskSnapshot.bytesTransferred / UploadTaskSnapshot.totalBytes * 100);
          setPercentage(percentage);
        },
        (error) => {
          console.error(error);
        },
        () => {
          // firebase storage에 저장된 사진을 메세지로 전송
          uploadTask.snapshot.ref.getDownloadURL()
            .then((downloadURL) => {
              messagesRef.child(currentChatRoom.id)
                .push().set(createMessage(downloadURL))
              setLoading(false);
            })
        })
    } catch (error) {
      setLoading(false);
      console.error(error);
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
      { !(percentage === 0 || percentage === 100) &&
        <ProgressBar animated variant="success" now={percentage} label={`${percentage}%`} />
      }
      <div>
        {errors && errors.map(errorMessage =>
          (<p style={{ color: 'red' }} key={uuidv4()} >{errorMessage}</p>))
        }
      </div>
      <div style={{ float: 'right' }}>
        <Button variant="primary" onClick={handleSubmit} disabled={loading} style={{ marginRight: 10 }}>보내기</Button>
        <Button variant="secondary" onClick={handleOpenImageRef} disabled={loading} >사진첨부</Button>
      </div>

      <input accept='image/jpeg, image/png' type="file" hidden ref={inputOpenImageRef} onChange={handleUploadImage} />
    </div>
  )
}

export default MessageForm
