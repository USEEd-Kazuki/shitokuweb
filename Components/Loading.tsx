import React from 'react'

const Loading = () => {
  return (
    <>
    <div className="LoadingContent">
    <video className='sendouMovie' src="/sendou.mp4"  playsInline autoPlay muted />
    </div>
    </>
  )
}

export default Loading