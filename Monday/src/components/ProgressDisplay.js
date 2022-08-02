import React from 'react'

const ProgressDisplay = ({ticket}) => {

const taskProgress = ticket.progress

  return (
    <div className="progress-display">
<div className="progress-bar">
  <div style={{width : taskProgress + '%'}} className="progress-indicator">
  </div>
</div>
    </div>
  )
}

export default ProgressDisplay