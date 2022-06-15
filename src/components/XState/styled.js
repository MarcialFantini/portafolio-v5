import styled from "styled-components";

export const XStateContainer = styled.div`

    width: 100%;
    height: auto;
     
    background: transparent;

    display: flex;
    flex-direction: column;

    @media (min-width: 450px){
        flex-direction: row;
    }
`

export const TextContainer = styled.div`
    width: 100%;
    height: auto;

    text-align: center;
    color: white;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 450px){
        width: 50%;
        margin: 0;
    }
`
export const TextH1 = styled.h1`
    font-size: 5rem;
    margin: 0;
    padding: 0;
`

export const TextP = styled.p`
    font-size: 2rem;
    margin: 0;
    padding: 0;
`

export const ImageContainer = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
 @media (min-width: 450px){
        width: 50%;
        margin: 0;
    }
   
`

export const ImgWidtMask = styled.img`
    width: 100%;
    height: auto;

    padding: 10%;

    mask-image: url(${props => props.mask});
    
    mask-size: cover;
`