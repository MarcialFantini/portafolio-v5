import React from 'react'
import { ImageContainer, ImgWidtMask, TextContainer, TextH1, TextP, XStateContainer } from './styled'
import BarrMask from './barrMask.png'
import Tours from './tours.PNG'
const XState = () => {
    return (
        <XStateContainer>
            <TextContainer>
                <TextH1>
                    Tours
                </TextH1>
                <TextP>
                    Aplicación para tomar un pasaje a un destino. Como si fueras a ir de vacaciones.
                </TextP>
                <TextP>
                    #Reactjs #JavaScript #Html5 #Css3 #Redux-Toolkit
                </TextP>

            </TextContainer>
            <ImageContainer>
                <ImgWidtMask src={Tours}
                    mask={BarrMask}
                />
            </ImageContainer>

        </XStateContainer>
    )
}

export default XState