import React, { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Dropzone from 'react-dropzone'
import { v4 as uuidv4 } from 'uuid'
import { PlusSquareOutlined, LoadingOutlined } from '@ant-design/icons'
import { UPLOAD_IMAGE_REQUEST, REMOVE_UPLOADED_IMAGE } from '../../../reducers/types'

function FileUploader() {

  const dispatch = useDispatch();
  const { fileData, uploadImageLoading, uploadImageDone } = useSelector(state => state.jaymall)

  const handleOnDrop = useCallback((files) => {
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
  }, [])

  const handleRemove = useCallback((index) => () => {
    dispatch({
      type: REMOVE_UPLOADED_IMAGE,
      payload: index
    })
  }, [])

  const rootDivStyle = useMemo(() => ({ display: 'flex', justifyContent: 'space-between' }), [])
  const getRootPropsStyle = useMemo(() => ({
    width: 200, height: 240, border: '1px solid lightgray',
    display: 'flex', alignItems: 'center', justifyContent: 'center'
  }), [])
  const plusIconStyle = useMemo(() => ({ fontSize: '3rem' }), [])
  const imageDivStyle = useMemo(() => ({ display: 'flex', alignItems: 'center', width: 500, height: 240, overflowX: 'scroll' }), [])
  const loadingWrapperDivStyle = useMemo(() => ({ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 500, height: 240 }), [])
  const loadingIconStyle = useMemo(() => ({ fontSize: '3rem' }), [])
  const imageStyle = useMemo(() => ({ height: 240, marginRight: 10 }), [])


  return (
    <div style={rootDivStyle}>
      <Dropzone
        onDrop={handleOnDrop}
        multiple
        maxSize={10 * 1024 * 1024}
      >
        {({ getRootProps, getInputProps }) => {
          return (
            <div style={getRootPropsStyle}
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              <PlusSquareOutlined style={plusIconStyle} />
            </div>
          )
        }}
      </Dropzone>
      <div style={imageDivStyle}>
        {uploadImageLoading && <div style={loadingWrapperDivStyle}>
          <LoadingOutlined style={loadingIconStyle} />
        </div>}
        {uploadImageDone && fileData.map((file, index) => {
          return (
            <div onClick={handleRemove(index)} key={uuidv4()}>
              <img src={file.image} alt={file.fileName} style={imageStyle} />
            </div>
          )
        })}
      </div>
    </div >
  )
}

export default FileUploader
