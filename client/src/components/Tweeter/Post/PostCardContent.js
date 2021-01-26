import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'

function PostCardContent({ content }) {
  return (
    <div>
      {content.split(/(#[^\s#]+)/g).map(v => {
        if (v.match(/(#[^\s#]+)/g)) {
          return <Link key={uuidv4()} to={`/tweeter/hashtag/${v.slice(1)}`}>{v}</Link>
        }
        return v
      })}
    </div>
  )
}

PostCardContent.propTypes = {
  content: PropTypes.string.isRequired
}

export default PostCardContent
