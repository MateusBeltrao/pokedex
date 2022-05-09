import styled from "styled-components";

export const HStyled = styled.h1`    
    color: ${props => props.color};
    font-size: ${props => props.size};
    text-align: ${props =>props.align};
    padding: 0;
    margin: 5px;
    width:30vh;
    
`