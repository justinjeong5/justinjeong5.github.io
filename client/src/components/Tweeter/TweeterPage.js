import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { LOAD_TWEETS_REQUEST } from '../../reducers/types'
import TweeterLayout from './TweeterLayout'
import PostForm from './Post/PostForm'
import PostCard from './Post/PostCard'

function TweeterPage() {

  const dispatch = useDispatch();
  const { currentUser } = useSelector(state => state.user)
  const { hasMoreTweet, tweetsList, loadTweetsLoading } = useSelector(state => state.tweeter)

  useEffect(() => {
    dispatch({
      type: LOAD_TWEETS_REQUEST
    })
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = (document.documentElement
        && document.documentElement.scrollTop)
        || document.body.scrollTop;
      const scrollHeight = (document.documentElement
        && document.documentElement.scrollHeight)
        || document.body.scrollHeight;
      if (hasMoreTweet && !loadTweetsLoading && scrollTop + window.innerHeight + 600 >= scrollHeight) {
        dispatch({
          type: LOAD_TWEETS_REQUEST
        })
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, [hasMoreTweet, loadTweetsLoading])

  return (
    <TweeterLayout>
      {currentUser.userId && <PostForm />}
      {/* <PostCardVirtualized /> */}
      {tweetsList.map((post) => (<PostCard key={uuidv4()} post={post} />))}
    </TweeterLayout>
  )
}

export default TweeterPage
