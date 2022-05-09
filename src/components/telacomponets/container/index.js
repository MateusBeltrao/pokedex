import React from 'react'
import { ContainerStyle } from './styles'

const Container = ({children, backgroundColor}) => {
  return (
    <ContainerStyle backgroundColor={backgroundColor}>{children}</ContainerStyle>
  )
}

export default Container