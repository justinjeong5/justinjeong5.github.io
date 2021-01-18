import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';
import { Typography, Form, Button, message as Message, Input, Space, Select, Divider } from 'antd'
import { PlusOutlined, CloseOutlined } from '@ant-design/icons';
import { CREATE_BLOG_POST_REQUEST, RESET_CREATE_BLOG_POST } from '../../reducers/types'
import QuillEditor from './Editor/QuillEditor'
const { Title } = Typography;
const { Option } = Select;

function CreatePage() {

  const dispatch = useDispatch();
  const history = useHistory();
  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')
  const [files, setFiles] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const [categories, setCategories] = useState(['자유게시판']);

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

  const handleAddCategory = () => {
    if (!newCategory.trim()) {
      return setNewCategory('');
    }
    if (categories.includes(newCategory)) {
      return Message.error('이미 존재하는 블로그 분류입니다.')
    }
    setCategories(prev => [...prev, newCategory]);
    setNewCategory('')
  }

  return (
    <div style={{ width: '75%', margin: 'auto' }}>
      <div style={{ textAlign: 'center', paddingTop: 100 }}>
        <Title level={2} >블로그 글 작성</Title>
      </div>

      <Form onFinish={onSubmit}>
        <div style={{ display: 'flex', }}>
          <Input value={title} onChange={onChangeTitle} placeholder='제목을 입력하세요' />
          <Select
            disabled={currentUser.role !== 1}
            defaultValue={'자유게시판'}
            style={{ width: 240 }}
            dropdownRender={menu => (
              <div>
                {menu}
                <Divider style={{ margin: '4px 0' }} />
                <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
                  <Input style={{ flex: 'auto' }} value={newCategory} onChange={(event) => setNewCategory(event.currentTarget.value)} />
                  <a
                    style={{ flex: 'none', padding: '8px', display: 'block', cursor: 'pointer' }}
                    onClick={handleAddCategory}
                  >
                    <PlusOutlined /> 추가
                    </a>
                </div>
              </div>
            )}
          >
            {categories.map((category) => (<Option key={category}>{category}</Option>))}
          </Select>
        </div>

        <QuillEditor
          placeholder={'블로그 글을 작성해주세요.'}
          onEditorChange={onEditorChange}
          onFilesChange={onFilesChange}
        />

        <div style={{ textAlign: 'end', marginTop: '1rem' }}>
          <Space>
            <Button
              htmlType='submit'
              type='primary'
              onSubmit={onSubmit}
              disabled={createBlogPostLoading}
              loading={createBlogPostLoading || uploadBlogDatasetLoading}
            >글쓰기</Button>
            <Button
              onClick={() => history.goBack(1)}
            >취소</Button>
          </Space>
        </div>
      </Form>
    </div>
  )
}

export default withRouter(CreatePage);
