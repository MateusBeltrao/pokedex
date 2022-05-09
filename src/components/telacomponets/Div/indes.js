import React from 'react'
import { DivStyles } from './styles'
import PropTypes from 'prop-types'

const Div = ({children, marginLeft, backgroundColor1, width, height, justifyContent, marginTop, backgroundColor2, boderStyle, borderColor, flexDirection, gradient}) => {
  return (
    <DivStyles 
        backgroundColor1={backgroundColor1}
        backgroundColor2={backgroundColor2}
        gradient={gradient}
        width={width}
        height={height}
        justifyContent={justifyContent}
        marginTop={marginTop}
        boderStyle={boderStyle}
        borderColor={borderColor}
        flexDirection={flexDirection}
        marginLeft={marginLeft}
        >
            {children}
        </DivStyles>
  )
}

Div.propTypes = {
    children: PropTypes.string,
    backgroundColor1: PropTypes.string,
    backgroundColor2: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    justifyContent: PropTypes.string,
    marginTop: PropTypes.string,
    boderStyle: PropTypes.string,
    borderColor: PropTypes.string,
    gradient: PropTypes.string
}

Div.defaultProps={
    children: "MateusBeltrao",
    backgroundColor1: "#000000",
    height: "150px",
    width: "200px",
    backgroundColor2: "#f0ffff",
    boderStyle: "none",
    gradient: "linear-gradient"
}

export default Div