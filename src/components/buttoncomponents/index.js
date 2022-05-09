import React from 'react'
import { Btn } from './styles'


const Button = ({children, backgroundColor, onClick}) => {
  return (
    <Btn
        backgroundColor={backgroundColor}
        onClick={onClick}>
            {children}
    </Btn>
  )
}



export default Button