import styled from "styled-components";

export const NavbarContainer = styled.div`
    width: 100%;
    height: 120px;

    background: transparent;

    display: flex;
    align-items: center;

`

export const Icon = styled.div`
    width: 80px;
    height: 80px;

    background: red;

    margin: 0 0 0 20px;

`

export const ActiveNabvar = styled.div`
    width: 80px;
    height: 1px;

    background: transparent;

    position: relative;

    margin: 0 20px 0 auto;

`

export const Bar1 = styled.div`
   width: 80px;
    height: 10px;

    background: white;

    border-radius: 10px;

    position: absolute;
    top: -20px;
    left: 0%;
`

export const Bar2 = styled.div`
   width: 80px;
    height: 10px;

    background: white;

    border-radius: 10px;
    position: absolute;
    top: 0px;
    left: 0%;
`

export const Bar3 = styled.div`
    width: 80px;
    height: 10px;

    background: white;

    border-radius: 10px;
    position: absolute;
    top: +20px;
    left: 0%;
`