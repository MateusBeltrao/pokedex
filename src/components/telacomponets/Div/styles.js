import styled from "styled-components";

export const DivStyles = styled.div`
    background-image: ${props => props.gradient}(${props =>props.backgroundColor1} -100%, ${props =>props.backgroundColor2}) ;
    width: ${props => props.width};
    height: ${props => props.height};
    display: flex;
    align-items: center;
    flex-direction: ${props => props.flexDirection} ;
    justify-content: ${props=> props.justifyContent};
    padding: 0  10px 0 10px;
    margin-top: ${props =>  props.marginTop};
    margin-left: ${props => props.margin};
    border-style: ${props => props.boderStyle};
    border-color: ${props => props.borderColor};
`

