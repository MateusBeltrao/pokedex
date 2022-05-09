import styled from "styled-components"

export const ContainerStyle = styled.div`
    background-color: ${props => props.backgroundColor};
    width: 70vh;
    height: 80vh;
    display: flex;
    flex-direction: column;
    border: 1ch;
    border-style: solid;
`