import styled, { keyframes } from "styled-components";

export const PortadaContainer = styled.div`
    width: 100%;
    height:auto; 

    position: relative;
`

export const Bar1 = styled.div`
    width: 15px ;
    height:95% ;

    background: Rgb(255, 255, 255,0.5);

    position: absolute;

    top: 5%;
    left: 5%;

`

export const Bar2 = styled.div`
    width: 15px ;
    height:95% ;

    background: Rgb(255, 255, 255,0.5);
    position: absolute;

    top: 5%;
    right: 5%;
   
   
`

const keyframeCubeNeon = keyframes`
    0%{
        top:0;
    }
    50%{
        top: 91%;
    }
    100%{
        top: 0;
    }
`

const keyframeCubeNeonInverted = keyframes`
    0%{
        top:91%;
    }
    50%{
        top: 0%;
    }
    100%{
        top: 91%;
    }
`

export const CubeNeon = styled.div`
        

        width: 100%;
        height: 30px;
        background: red;
        position: absolute;
        left: 0;
        
        
        box-shadow:
         inset 0 0 10px 0 red,
         0 0 20px red inset,
         0 0 40px 3px red,
         0 0 20px 0 white inset ,
         0 0 10px 0 red,
         0 0 30px 0 red,
         0 0 40px 0 red
         ;
         
         animation: ${props => {
        if (props.inverted) {
            return keyframeCubeNeonInverted
        } else {
            return keyframeCubeNeon
        }
    }} 10s infinite linear;
`


export const TextContainerP = styled.div`
    height: auto;
    width: 40%;
    margin: auto;
`

export const TextP = styled.p`
    font-size: 1.6rem ;
    color: white;
`

export const TextTitleContainer = styled.div`
    width: 80%;
    margin: auto;  

    text-align: center;
    
`
export const TextH1 = styled.h1`
    font-size: 5.0rem;
    margin: 0;
    color: ${props => {
        if (!props.active) {
            return "white"
        } else {
            return "transparent"
        }
    }};

    -webkit-text-stroke: 1px white;
` 
