import React, { useEffect, useState } from 'react'

const Image = props => {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    console.log('call')
    setLoaded(false)
  }, [props.src])
  console.log('l', loaded);
  return (
    <>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: loaded ? 'none' : 'block',
          zIndex: 10,
          background: 'white'
        }}
      >
        Loading...
      </div>
      <img {...props} onLoad={() => setLoaded(true)} />
    </>
  )
}

export default Image
