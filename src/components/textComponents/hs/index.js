import React from 'react'
import { HStyled } from './styles'

const H = ({children, color, size,align}) => {
  return (
    <HStyled
        color={color}
        size={size}
        align={align}>
            {children}
    </HStyled>
  )
}

export default H