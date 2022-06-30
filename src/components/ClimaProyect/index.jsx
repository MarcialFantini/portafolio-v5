import React from 'react'
import { ContainerClima, ImageContainer, ImgWhitMask, TextContainer, TextH1, TextP } from './styled'

import clima from './clima.png'
import climaApp from './climaApp.PNG'

export const ClimaProyect = () => {
    return (
        <ContainerClima>
            <TextContainer>
                <TextH1>
                    AppClima
                </TextH1>
                <TextP>
                    Aplicación para ver el clima de tu ciudad.
                </TextP>

                <TextP>
                    #Fetch-Api #Reactjs #JavaScript #Html5 #Css3 #Redux-Toolkit
                </TextP>
            </TextContainer>
            <ImageContainer>
                <ImgWhitMask
                    src={climaApp}
                    mask={clima}
                />
            </ImageContainer>

        </ContainerClima>
    )
}

