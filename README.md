<h1 align="center">JUSTINJEONG5</h1>

## 📝 Summary
I made use of github.io as personal blog and Theoretical computer science study will be written for personal purpose.

## ✨ Features
- User
  - Registration
  - Login/out
  - Editing Information

- 📓Blog
  - Post Blog with Image, Video, Link, and Files
  - Comment

## 🛠️ Issue

### React Quill

> document is not defined
![image](https://user-images.githubusercontent.com/44011462/108169338-eb529880-713b-11eb-9679-a3f591788145.png)

reference : [Server side rendering broken](https://github.com/zenoamaro/react-quill/issues/122)


```javascript
// components/Blog/Editor/QuillEditor.js
const ReactQuill = typeof window === 'object' ? require('react-quill') : () => false;
const { Quill } = ReactQuill;
if(Quill){
  // Additional Features
}
<ReactQuill theme={'snow'}/>
```

## 🏫 Research

### Deploy Nextjs

