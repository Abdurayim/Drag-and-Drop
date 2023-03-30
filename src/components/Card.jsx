import React from 'react'

const Card = ({title,board,position,card,dragOverHandler,
    dragLeaveHandler,
    dragStartHandler,
    dragEndHandler,
    dropHandler}) => {
  return (
    <div 
        onDragOver={(e)=>dragOverHandler(e)}
        onDragLeave={(e)=>dragLeaveHandler(e)}
        onDragStart={(e)=>dragStartHandler(e,board,card)}
        onDragEnd={(e)=>dragEndHandler(e)}
        onDrop={(e)=>dropHandler(e,board)}
        draggable={true}
        className='card'>
        <h3>{title}</h3>
        <p>{position}</p>
        <div 
        className='features'>other features</div>
        <div className='others'>Recruiter</div>
    </div>
  )
}

export default Card