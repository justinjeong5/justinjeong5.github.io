import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';
import { Typography, Form, Button, message as Message, Input, Space, Select, Divider } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
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

  const onSubmit = useCallback(() => {
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
  }, [title, content, currentUser, uploadDataset])

  const isAdmin = useCallback(() => {
    return currentUser.role === 1
  }, [currentUser])

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
    history.goBack(1)
  }, [])

  const handleCategory = useCallback((event) => {
    setNewCategory(event.currentTarget.value)
  }, [])

  const renderCategory = useCallback(categories.map((category) => {
    return <Option key={category}>{category}</Option>
  }), [categories])

  const rootDivStyle = useMemo(() => ({ width: '75%', margin: 'auto' }), [])
  const titleStyle = useMemo(() => ({ textAlign: 'center', paddingTop: 100 }), [])
  const formWrapperStyle = useMemo(() => ({ display: 'flex', }), [])
  const selectorStyle = useMemo(() => ({ width: 240 }), [])
  const selectorDividerStyle = useMemo(() => ({ margin: '4px 0' }), [])
  const categoryWrapperStyle = useMemo(() => ({ display: 'flex', flexWrap: 'nowrap', padding: 8 }), [])
  const categoryInputStyle = useMemo(() => ({ width: '75%' }), [])
  const spaceStyle = useMemo(() => ({ textAlign: 'end', marginTop: '1rem' }), [])
  const plusButtonWrapperStyle = useMemo(() => ({ marginTop: 5 }), [])


  return (
    <div style={rootDivStyle}>
      <div style={titleStyle}>
        <Title level={2} >블로그 글 작성</Title>
      </div>

      <Form onFinish={onSubmit}>
        <div style={formWrapperStyle}>
          <Input value={title} onChange={onChangeTitle} placeholder='제목을 입력하세요' />
          <Select
            disabled={!isAdmin}
            defaultValue={'자유게시판'}
            style={selectorStyle}
            dropdownRender={menu => (
              <div>
                {menu}
                <Divider style={selectorDividerStyle} />
                <div style={categoryWrapperStyle}>
                  <Input style={categoryInputStyle} value={newCategory} onChange={handleCategory} />
                  <span style={plusButtonWrapperStyle}>
                    <PlusOutlined onClick={handleAddCategory} />추가
                  </span>
                </div>
              </div>
            )}
          >
            {renderCategory}
          </Select>
        </div>

        <QuillEditor
          placeholder={'블로그 글을 작성해주세요.'}
          onEditorChange={onEditorChange}
          onFilesChange={onFilesChange}
        />

        <Space style={spaceStyle}>
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

export default withRouter(CreatePage);
