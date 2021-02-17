import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Router, { useRouter } from 'next/router'
import { Typography, Form, Button, message as Message, Input, Space, Select, Divider } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import { CREATE_BLOG_POST_REQUEST, RESET_CREATE_BLOG_POST } from '../../reducers/types'
import QuillEditor from './Editor/QuillEditor'

const { Title } = Typography;
const { Option } = Select;

function CreatePage() {

  const dispatch = useDispatch();
  const router = useRouter();
  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')
  const [files, setFiles] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const [categories, setCategories] = useState(['자유게시판']);

  const { currentUser } = useSelector(state => state.user)
  const { createBlogPostLoading, createBlogPostDone, uploadDataset, uploadBlogDatasetLoading } = useSelector(state => state.blog)

  useEffect(() => {
    if (createBlogPostDone) {
      dispatch({
        type: RESET_CREATE_BLOG_POST
      })
      Message.success('게시글이 등록되었습니다.')
      Router.push('/blog')
    }
  }, [dispatch, createBlogPostDone])

  const onSubmit = useCallback(() => {
    if (title.trim() === '') return Message.error('제목을 작성해주세요.');
    if (content.trim() === '') return Message.error('내용을 작성해주세요.');

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
    setTitle('');
  }, [title, content, currentUser, uploadDataset])

  const onEditorChange = useCallback((value) => {
    setContent(value)
  }, [])

  const onFilesChange = useCallback((files) => {
    setFiles(files)
  }, [])

  const onChangeTitle = useCallback((event) => {
    setTitle(event.target.value);
  }, [])

  const handleAddCategory = useCallback(() => {
    if (!newCategory.trim()) {
      return setNewCategory('');
    }
    if (categories.includes(newCategory)) {
      return Message.error('이미 존재하는 블로그 분류입니다.')
    }
    setCategories(prev => [...prev, newCategory]);
    setNewCategory('')
  }, [newCategory])

  const handleCancel = useCallback(() => {
    router.back()
  }, [])

  const handleCategory = useCallback((event) => {
    setNewCategory(event.currentTarget.value)
  }, [])

  const renderCategory = useCallback(() => categories.map((category) => {
    return <Option key={category}>{category}</Option>
  }), [categories])


  return (
    <div style={{ width: '75%', margin: 'auto' }}>
      <div style={{ textAlign: 'center', paddingTop: 50 }}>
        <Title level={2} >블로그 글 작성</Title>
      </div>

      <Form onFinish={onSubmit}>
        <div style={{ display: 'flex' }}>
          <Input value={title} onChange={onChangeTitle} placeholder='제목을 입력하세요' />
          <Select
            disabled={!currentUser.role}
            defaultValue={'자유게시판'}
            style={{ width: 240 }}
            dropdownRender={menu => (
              <div>
                {menu}
                <Divider style={{ margin: '4px 0' }} />
                <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
                  <Input style={{ width: '75%' }} value={newCategory} onChange={handleCategory} />
                  <span style={{ marginTop: 5 }}>
                    <PlusOutlined onClick={handleAddCategory} />추가
                  </span>
                </div>
              </div>
            )}
          >
            {renderCategory()}
          </Select>
        </div>

        <QuillEditor
          placeholder={'블로그 글을 작성해주세요.'}
          onEditorChange={onEditorChange}
          onFilesChange={onFilesChange}
        />

        <Space style={{ textAlign: 'end', marginTop: '1rem' }}>
          <Button
            htmlType='submit'
            type='primary'
            onSubmit={onSubmit}
            disabled={createBlogPostLoading}
            loading={createBlogPostLoading || uploadBlogDatasetLoading}
          >글쓰기</Button>
          <Button onClick={handleCancel}>취소</Button>
        </Space>
      </Form>
    </div>
  )
}

export default CreatePage;
