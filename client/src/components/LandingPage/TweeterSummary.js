import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import PostCard from '../Tweeter/Post/PostCard'
import { LOAD_TWEETS_REQUEST } from '../../reducers/types'

function TweeterSummary() {

  const dispatch = useDispatch();
  const { tweetsList } = useSelector(state => state.tweeter)

  useEffect(() => {
    if (tweetsList.length === 0) {
      dispatch({
        type: LOAD_TWEETS_REQUEST,
      })
    }
  }, [])

  const getTweetsList = useCallback(() => {
    return tweetsList.slice(0, 2);
  }, [tweetsList])

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '80%', maxWidth: 500 }}>
        {getTweetsList().map((post) => (<PostCard key={uuidv4()} post={post} />))}
      </div>
    </div>
  )
}

export default TweeterSummary
