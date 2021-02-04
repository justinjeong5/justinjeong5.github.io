import "react-quill/dist/quill.snow.css";

import React from 'react';
import { connect } from 'react-redux'
import ReactQuill, { Quill } from 'react-quill';
import axios from 'axios';
import { message as Message } from 'antd'
import { FileImageOutlined, FileAddOutlined, VideoCameraAddOutlined } from '@ant-design/icons'
import { UPLOAD_BLOG_DATASET_REQUEST, RESET_UPLOAD_BLOG_DATASET } from '../../../reducers/types'

const __ISMSIE__ = navigator.userAgent.match(/Trident/i) ? true : false;

// Quill.register('modules/clipboard', PlainClipboard, true);

const QuillClipboard = Quill.import('modules/clipboard');

class Clipboard extends QuillClipboard {

  getMetaTagElements = (stringContent) => {
    const el = document.createElement('div');
    el.innerHTML = stringContent;
    return el.getElementsByTagName('meta');
  };

  async onPaste(e) {
    let clipboardData = e.clipboardData || window.clipboardData;
    let pastedData = await clipboardData.getData('Text');

    const urlMatches = pastedData.match(/\b(http|https)?:\/\/\S+/gi) || [];
    if (urlMatches.length > 0) {
      e.preventDefault();
      urlMatches.forEach(link => {
        axios.get(link)
          .then(payload => {
            // let title, image, url, description;
            let title, image, url;
            for (let node of this.getMetaTagElements(payload)) {
              if (node.getAttribute("property") === "og:title") {
                title = node.getAttribute("content");
              }
              if (node.getAttribute("property") === "og:image") {
                image = node.getAttribute("content");
              }
              if (node.getAttribute("property") === "og:url") {
                url = node.getAttribute("content");
              }
              // if (node.getAttribute("property") === "og:description") {
              //     description = node.getAttribute("content");
              // }
            }

            const rendered = `<a href=${url} target="_blank"><div><img src=${image} alt=${title} width="20%"/><span>${title}</span></div></a>`;

            let range = this.quill.getSelection();
            let position = range ? range.index : 0;
            this.quill.pasteHTML(position, rendered, 'silent');
            this.quill.setSelection(position + rendered.length);
          })
          .catch(error => console.error(error));
      });

    } else {
      //console.log('when to use this') 보통 다른 곳에서  paste 한다음에  copy하면 이쪽 걸로 한다. 
      super.onPaste(e);
    }
  }

}
Quill.register('modules/clipboard', Clipboard, true);

const BlockEmbed = Quill.import('blots/block/embed');

class ImageBlot extends BlockEmbed {

  static create(value) {
    const imgTag = super.create();
    imgTag.setAttribute('src', value.src);
    imgTag.setAttribute('alt', value.title);
    imgTag.setAttribute('style', 'width: 70%; max-width: 400px;');
    return imgTag;
  }

  static value(node) {
    return { src: node.getAttribute('src'), title: node.getAttribute('alt') };
  }

}

ImageBlot.blotName = 'image';
ImageBlot.tagName = 'img';
Quill.register(ImageBlot);

class VideoBlot extends BlockEmbed {

  static create(value) {
    if (value && value.src) {
      const videoTag = super.create();
      videoTag.setAttribute('src', value.src);
      videoTag.setAttribute('title', value.title);
      videoTag.setAttribute('style', 'width: 70%; max-width: 400px;');
      videoTag.setAttribute('controls', '');

      return videoTag;
    } else {
      const iframeTag = document.createElement('iframe');
      iframeTag.setAttribute('src', value);
      iframeTag.setAttribute('frameborder', '0');
      iframeTag.setAttribute('allowfullscreen', true);
      iframeTag.setAttribute('style', 'width: 70%; max-width: 400px;');
      return iframeTag;
    }
  }

  static value(node) {
    if (node.getAttribute('title')) {
      return { src: node.getAttribute('src'), title: node.getAttribute('title') };
    } else {
      return node.getAttribute('src');
    }
  }

}

VideoBlot.blotName = 'video';
VideoBlot.tagName = 'video';
Quill.register(VideoBlot);

class FileBlot extends BlockEmbed {

  static create(value) {
    console.log(value, 'fileBlot, fileINfo')
    const prefixTag = document.createElement('span');
    prefixTag.innerText = "첨부파일 - ";

    const bTag = document.createElement('b');
    //위에 첨부파일 글자 옆에  파일 이름이 b 태그를 사용해서 나온다.
    bTag.innerText = value.title;

    const linkTag = document.createElement('a');
    linkTag.setAttribute('href', value.src);
    linkTag.setAttribute("target", "_blank");
    linkTag.setAttribute("className", "file-link-inner-post");
    linkTag.appendChild(bTag);
    //linkTag 이런식으로 나온다 <a href="btn_editPic@3x.png" target="_blank" classname="file-link-inner-post"><b>btn_editPic@3x.png</b></a>

    const node = super.create();
    node.appendChild(prefixTag);
    node.appendChild(linkTag);

    return node;

  }

  static value(node) {
    return { src: node.querySelector('a').getAttribute('href'), title: node.querySelector('b').innerText };
  }

}

FileBlot.blotName = 'file';
FileBlot.tagName = 'p';
FileBlot.className = 'file-inner-post';
Quill.register(FileBlot);

class PollBlot extends BlockEmbed {

  static create(value) {
    const prefixTag = document.createElement('span');
    prefixTag.innerText = "투표 - ";

    const bTag = document.createElement('b');
    bTag.innerText = value.title;

    const node = super.create();
    node.setAttribute('id', value.id);
    node.appendChild(prefixTag);
    node.appendChild(bTag);

    return node;
  }

  static value(node) {
    const id = node.getAttribute('id');
    const bTag = node.querySelector('b');
    const title = bTag.innerText;
    return { id, title };
  }

}

PollBlot.blotName = 'poll';
PollBlot.tagName = 'p';
PollBlot.className = 'poll-inner-post';
Quill.register(PollBlot);

class QuillEditor extends React.Component {

  bandId;
  placeholder;
  onEditorChange;
  onFilesChange;
  onPollsChange;

  constructor(props) {
    super(props);

    this.state = {
      editorHtml: __ISMSIE__ ? "<p>&nbsp;</p>" : "",
    };

    this.reactQuillRef = null;

    this.inputOpenImageRef = React.createRef();
    this.inputOpenVideoRef = React.createRef();
    this.inputOpenFileRef = React.createRef();
  }

  componentDidUpdate() {
    if (this.props.blog.uploadBlogDatasetError) {
      Message.error('파일을 업로드 하는 과정에서 문제가 발생했습니다.')
    }

    if (this.props.blog.uploadBlogDatasetDone) {
      const quill = this.reactQuillRef.getEditor();
      quill.focus();

      let range = quill.getSelection();
      let position = range ? range.index : 0;
      quill.insertEmbed(position, this.props.blog.uploadDataset.dataType, {
        src: this.props.blog.uploadDataset.url,
        title: this.props.blog.uploadDataset.fileName
      });
      quill.setSelection(position + 1);

      this.props.dispatchResetDataset();
    }
  }

  handleChange = (html) => {
    // console.log('html', html)
    // https://youtu.be/BbR-QCoKngE
    // https://www.youtube.com/embed/ZwKhufmMxko
    // https://tv.naver.com/v/9176888
    // renderToStaticMarkup(ReactHtmlParser(html, options));

    this.setState({
      editorHtml: html
    }, () => {
      this.props.onEditorChange(this.state.editorHtml);
    });
  };

  // I V F P들을  눌렀을떄 insertImage: this.imageHandler로 가서  거기서 inputOpenImageRef를 클릭 시킨다. 
  imageHandler = () => {
    this.inputOpenImageRef.current.click();
  };

  videoHandler = () => {
    this.inputOpenVideoRef.current.click();
  };

  fileHandler = () => {
    this.inputOpenFileRef.current.click();
  };


  insertImage = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (e.currentTarget && e.currentTarget.files?.length > 0) {
      const file = e.currentTarget.files[0];
      let formData = new FormData();
      formData.append("file", file);

      const config = {
        header: { 'Content-Type': 'multipart/form-data' },
      }

      this.props.dispatchDataset({ formData, config, dataType: 'image', file })
    }
  };

  insertVideo = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (e.currentTarget && e.currentTarget.files?.length > 0) {
      const file = e.currentTarget.files[0];

      let formData = new FormData();
      formData.append("file", file);

      const config = {
        header: { 'Content-Type': 'multipart/form-data' }
      }

      this.props.dispatchDataset({ formData, config, dataType: 'video', file })
    }
  }

  insertFile = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (e.currentTarget && e.currentTarget.files?.length > 0) {
      const file = e.currentTarget.files[0];

      let formData = new FormData();
      formData.append("file", file);

      const config = {
        header: { 'Content-Type': 'multipart/form-data' }
      }

      this.props.dispatchDataset({ formData, config, dataType: 'file', file })
    }
  };

  render() {
    return (
      <div>
        <div id="toolbar">
          <select className="ql-header" defaultValue={""} onChange={e => e.persist()}>
            <option value="1" />
            <option value="2" />
            <option value="" />
          </select>
          <button className="ql-bold" />
          <button className="ql-italic" />
          <button className="ql-underline" />
          <button className="ql-strike" />
          <button className="ql-insertImage">
            <FileImageOutlined />
          </button>
          <button className="ql-insertVideo">
            <VideoCameraAddOutlined />
          </button>
          <button className="ql-insertFile">
            <FileAddOutlined />
          </button>
          <button className="ql-link" />
          <button className="ql-code-block" />
          <button className="ql-video" />
          <button className="ql-blockquote" />
          <button className="ql-clean" />
        </div>
        <ReactQuill
          ref={(el) => { this.reactQuillRef = el }}
          theme={'snow'}
          onChange={this.handleChange}
          modules={this.modules}
          formats={this.formats}
          value={this.state.editorHtml}
          placeholder={this.props.placeholder}
          style={{ height: 'calc(100vh - 358px)', overflowY: 'hidden' }}
        />
        <input type="file" accept="image/*" ref={this.inputOpenImageRef} hidden onChange={this.insertImage} />
        <input type="file" accept="video/*" ref={this.inputOpenVideoRef} hidden onChange={this.insertVideo} />
        <input type="file" accept="*" ref={this.inputOpenFileRef} hidden onChange={this.insertFile} />
      </div>
    )
  }

  modules = {
    // syntax: true,
    toolbar: {
      container: "#toolbar",
      //id ="toorbar"는  그 위에 B I U S I V F P 이거 있는 곳이다. 
      handlers: {
        insertImage: this.imageHandler,
        insertVideo: this.videoHandler,
        insertFile: this.fileHandler,
        insertPoll: this.pollHandler,
      }
    },

  };

  formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'image', 'video', 'file', 'link', "code-block", "video", "blockquote", "clean"
  ];
}

const mapStateToProps = (state) => ({
  blog: state.blog,
})

const mapDispatchToProps = (dispatch) => ({
  dispatchDataset: (payload) => dispatch({
    type: UPLOAD_BLOG_DATASET_REQUEST,
    payload
  }),
  dispatchResetDataset: () => dispatch({
    type: RESET_UPLOAD_BLOG_DATASET,
  })

})

export default connect(mapStateToProps, mapDispatchToProps)(QuillEditor);