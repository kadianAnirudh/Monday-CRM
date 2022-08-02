import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const PriorityDisplay = ({ticket}) => {

const taskPriority = ticket.priority

  return (
    <div className="priority-display">
        <div className="star-container">
<AiFillStar className="star-icon" style={{color : taskPriority >= 1 ? 'rgb(253,253,150)' : 'rgb(221,221,221)'}}/>
<AiFillStar className="star-icon" style={{color : taskPriority >= 2 ? 'rgb(253,253,150)' : 'rgb(221,221,221)'}}/>
<AiFillStar className="star-icon" style={{color : taskPriority >= 3 ? 'rgb(253,253,150)' : 'rgb(221,221,221)'}}/>
<AiFillStar className="star-icon" style={{color : taskPriority >= 4 ? 'rgb(253,253,150)' : 'rgb(221,221,221)'}}/>
<AiFillStar className="star-icon" style={{color : taskPriority >= 5 ? 'rgb(253,253,150)' : 'rgb(221,221,221)'}}/>

</div>
    </div>
  )
}

export default PriorityDisplay