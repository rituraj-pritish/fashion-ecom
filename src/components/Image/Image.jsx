import React, { useEffect, useState } from 'react'
import MoonLoader from 'react-spinners/MoonLoader'
import { Loader } from './Image.styles'

const CustomImage = ({ src, alt, size: loaderSize }) => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    if (!isCached(src)) {
      setLoading(true)
    }
  }, [src])

  const isCached = src => {
    const image = new Image()
    image.src = src
    return image.complete
  }

  return (
    <>
      <Loader loading={loading}>
        <MoonLoader size={loaderSize === 'small' ? 20 : 50} color='#757575' />
      </Loader>
      <img src={src} onLoad={() => setLoading(false)} alt={alt} />
    </>
  )
}

export default CustomImage
