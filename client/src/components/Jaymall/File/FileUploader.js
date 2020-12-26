import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Dropzone from 'react-dropzone'
import { v4 as uuidv4 } from 'uuid'
import { PlusSquareOutlined, LoadingOutlined } from '@ant-design/icons'
import { UPLOAD_IMAGE_REQUEST, REMOVE_UPLOADED_IMAGE } from '../../../reducers/types'
import { SERVER_URL } from '../../../config/key'

function FileUploader() {

  const dispatch = useDispatch();
  const { fileData, uploadImageLoading, uploadImageDone } = useSelector(state => state.jaymall)

  const handleOnDrop = (files) => {
    const formData = new FormData();
    const config = {
      header: { 'content-type': 'multipart/form-data' }
    }

    files.map(value => formData.append('file', value))
    dispatch({
      type: UPLOAD_IMAGE_REQUEST,
      payload: {
        formData,
        config
      }
    })
  }

  const handleRemove = (index) => () => {
    dispatch({
      type: REMOVE_UPLOADED_IMAGE,
      payload: index
    })
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Dropzone
        onDrop={handleOnDrop}
        multiple
        maxSize={10 * 1024 * 1024}
      >
        {({ getRootProps, getInputProps }) => {
          return (
            <div style={{
              width: 200, height: 240, border: '1px solid lightgray',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              <PlusSquareOutlined style={{ fontSize: '3rem' }} />
            </div>
          )
        }}
      </Dropzone>
      <div style={{ display: 'flex', width: 500, height: 240, overflowX: 'scroll' }}>
        {uploadImageLoading &&
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: 'calc(100vh - 80px)' }}>
            <LoadingOutlined style={{ fontSize: '10rem' }} />
          </div>
        }
        {uploadImageDone && fileData.map((file, index) => {
          return (
            <div onClick={handleRemove(index)} key={uuidv4()}>
              <img src={`${SERVER_URL}/${file.image}`} alt={file.fileName} style={{ height: 240, marginRight: 10 }} />
            </div>
          )

        })}
      </div>

    </div>
  )
}

export default FileUploader
