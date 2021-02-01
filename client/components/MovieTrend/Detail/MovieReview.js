import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import Comment from '../../utils/Comment/Comment'

function MovieReview() {

  const { currentUser } = useSelector(state => state.user);
  const { currentMovie } = useSelector(state => state.movie);

  const payloadData = useMemo(() => ({ movieId: currentMovie.id }), [currentMovie])

  return (
    <Comment disabled={!currentUser.isAuth} payload={payloadData} description='관람평 남기기' placeholder='영화의 관람 후기를 공유해주세요!' />
  )
}

export default MovieReview
