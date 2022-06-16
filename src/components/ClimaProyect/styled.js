import styled from "styled-components";

export const ContainerClima = styled.div`
    width: 100%;
    height: auto;

    background: black;
     display: flex;
     justify-content: center;
     align-items: center;
    flex-direction: column;
    margin: 0 0 10% 0;

    @media (min-width: 450px){
       
        flex-direction: row;
    }
    
`

export const TextContainer = styled.div`
    
    color: white;

    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 450px){
        width: 40%;
        margin: 0;
    }
`

export const TextH1 = styled.h1`
    font-size: 4rem;
    margin :0 ;
`

export const TextP = styled.p`
    font-size: 2rem;
    margin: 0;
`

export const ImageContainer = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    justify-content: center;
    align-items: center;
    
    margin: 30px 0;
    @media(min-width: 450px){
        width: 40%;
    }
`

export const ImgWhitMask = styled.img`
    width: 100%;
    height: auto;

    mask-image: url(${props => props.mask});
    mask-size: contain;

    

    @media(min-width: 450px){
        width: 100%;

    }
`
