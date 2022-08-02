import React from 'react'

const StatusDisplay = ({ticket}) => {

const workStatus = ticket.status;

// u take a const wrt value holder, let a variable be empty, start a switch wrt value holder and give in case and outcomes wrt empty variable
const getColor = (workStatus) => { 
let color
switch (workStatus) {
case 'done':
  color = 'rgb(186,255,201)'
  break
case 'in Progress':
  color = 'rgb(255,223,186)'
  break
case 'stuck':
  color = 'rgb(186,225,285)'
  break
}
return color
}

  return (
    <div className="status-display" style={{ backgroundColor: getColor(workStatus)}}>
      <h3>{workStatus}</h3>
    </div>
  )
}

export default StatusDisplay