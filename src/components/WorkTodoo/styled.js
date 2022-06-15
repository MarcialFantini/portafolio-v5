import styled from "styled-components";

export const WorkTodooContainer = styled.div`
    width: 100%;
    height: auto;
    background: transparent;

    padding-bottom: 20px;
    @media (min-width: 450px){
        display: flex;
        flex-direction: row;
        
    }

`

export const ContainerText = styled.div`
    width: 70%;
    height: auto;
    margin: 10px auto 0 auto;
    
@media (min-width: 450px){
        width: 50%;
        margin: 0 0 0 5%;
    }
`

export const TextH1 = styled.h1`
    font-size: 5.0rem;
    color: white;
`
export const TextP = styled.p`
    font-size: 2rem;
    color: white;
    margin: 0;
`

export const ContainerImage = styled.div`
    width: 80%;
    height: auto;

    margin: 30px auto;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 450px){
        width: 50%;
        margin: 0 5% 0 0;
    }
`

export const ImgWhitMask = styled.img`
    width: 100%;
    height: auto;
    
    mask-image: url(${props => props.mask});
    mask-size:  cover;
  
`