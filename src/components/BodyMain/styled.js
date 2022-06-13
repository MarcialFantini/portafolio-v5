import styled from "styled-components";


export const Body = styled.div`
   
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background: ${state => state.theme.principal};
    transition: all 0.3s;
`