import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LikeButton = ({ liked, onToggle }) => (
  <button type="button" className="btn btn-link" onClick={() => onToggle(liked)}>
    <FontAwesomeIcon icon={[liked ? 'fas' : 'far', 'heart']} />
  </button>
)

export default LikeButton
