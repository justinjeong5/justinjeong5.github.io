import React from 'react'
import { useSelector } from 'react-redux'
import Comment from '../../utils/Comment/Comment'

function MovieReview() {

  const { currentUser } = useSelector(state => state.user);
  const { currentMovie } = useSelector(state => state.movie);

  return (
    <Comment disabled={!currentUser.isAuth} payload={{ movieId: currentMovie.id }} description='관람평 남기기' placeholder='영화의 관람 후기를 공유해주세요!' />
  )
}

export default MovieReview
