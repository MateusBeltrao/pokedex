import React from 'react'
import { ImagensStyled } from './styles'

const Imagen = ({src, children, backgroundColor}) => {
  return (
    <ImagensStyled
    src={src}
    backgroundColor={backgroundColor}>
      {children}
    </ImagensStyled>
  )
}

export default Imagen