import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';
import { Typography, Form, Button, message as Message, Input, Space } from 'antd'
import { CREATE_BLOG_POST_REQUEST, RESET_CREATE_BLOG_POST } from '../../reducers/types'
import QuillEditor from './Editor/QuillEditor'
const { Title } = Typography;

function CreatePage() {

  const dispatch = useDispatch();
  const history = useHistory();
  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')
  const [files, setFiles] = useState([]);

  const { currentUser } = useSelector(state => state.user)
  const { createBlogPostLoading, createBlogPostDone, uploadDataset, uploadBlogDatasetLoading } = useSelector(state => state.blog)


  useEffect(() => {
    if (createBlogPostDone) {
      Message.success('게시글이 등록되었습니다.')
      setTimeout(() => {
        dispatch({
          type: RESET_CREATE_BLOG_POST
        })
        history.push('/blog')
      }, 2000)
    }
  }, [dispatch, history, createBlogPostDone])

  const onSubmit = () => {
    if (title === '') return Message.error('제목을 작성해주세요.');
    if (content === '') return Message.error('내용을 작성해주세요.');

    dispatch({
      type: CREATE_BLOG_POST_REQUEST,
      payload: {
        content: content,
        title: title,
        writer: currentUser.userId,
        files: uploadDataset.files
      },
    })

    setContent('');
  }

  const onEditorChange = (value) => {
    setContent(value)
  }

  const onFilesChange = (files) => {
    setFiles(files)
  }

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  }

  return (
    <>
      <div style={{ width: '75%', margin: '3rem auto' }}>
        <div style={{ textAlign: 'center', marginTop: 100, marginBottom: 100 }}>
          <Title level={2} >블로그 글 작성</Title>
        </div>
        <Form onFinish={onSubmit}>
          <Input value={title} onChange={onChangeTitle} placeholder='제목을 입력하세요' />

          <QuillEditor
            placeholder={'블로그 글을 작성해주세요.'}
            onEditorChange={onEditorChange}
            onFilesChange={onFilesChange}
          />

          <div style={{ textAlign: 'center', margin: '2rem' }}>
            <Space>
              <Button
                htmlType='submit'
                type='primary'
                onSubmit={onSubmit}
                disabled={createBlogPostLoading}
                loading={createBlogPostLoading || uploadBlogDatasetLoading}
              >글쓰기</Button>
              <Button
                onClick={() => window.history.back()}
              >취소</Button>
            </Space>
          </div>
        </Form>
      </div>
    </>
  )
}

export default withRouter(CreatePage);
