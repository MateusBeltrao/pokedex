import styled from "styled-components";

export const AppStyled = styled.div`
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -250px 0 0 -370px;
    align-items: center;
    background-color: ${props => props.background};
`