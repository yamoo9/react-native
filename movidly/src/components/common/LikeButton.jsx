import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LikeButton = props => {
  function likedClass() {
    return props.liked ? 'fas' : 'far'
  }
  return (
    <button type="button" className="btn btn-link" onClick={props.onToogleLike}>
      <FontAwesomeIcon icon={[likedClass(), 'heart']} />
    </button>
  )
}

export default LikeButton
