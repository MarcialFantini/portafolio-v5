import styled from "styled-components";

export const Container = styled.div`
    width: 90vw;
    height:45vw;
    
    overflow-x: hidden;
    margin: 200px auto 0 auto;

    position: relative;
    border-radius  :20px ;
`

export const Carrusel = styled.div`
    border-radius: 20px;

    width: 100%;
    height: 45vw;

    display: flex;
    flex-direction: row;

    
    position: absolute;
    top: 0;
    left: ${props => props.position};

    transition: all 0.3s ;

`
export const ImagesCarrusel = styled.img`
    width: 90vw;
    height: 45vw;

    

    margin: 0;
    border: 1px solid black;
`
export const BtnNext = styled.button`
    width: auto;
    min-width: 30px;
    height: auto;
    min-height: 30px;

    font-size: 1.6rem;

    background: skyblue;
    position: absolute;

    left: ${props => {
        if (props.left) {
            return "5%"
        }
    }};
    right: ${props => {
        if (!props.left) {
            return "5%"
        }
    }};

    top: 40%;

    z-index: 10;

`

