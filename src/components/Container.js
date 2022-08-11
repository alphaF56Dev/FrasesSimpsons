import styled from "styled-components";

export default function Container({children}){
    return (
        <Content>{children}</Content> //con children se le indica que recibira "hijos" de un componente principal, en este caso App.js
    );
}

const Content = styled.div`
    max-with: 1200px;
    padding: 40px;
    margin: o auto;
`;