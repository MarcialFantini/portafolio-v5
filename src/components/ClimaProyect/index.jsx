import React from 'react'
import { ContainerClima, ImageContainer, ImgWhitMask, TextContainer, TextH1, TextP } from './styled'

import clima from './clima.png'

export const ClimaProyect = () => {
    return (
        <ContainerClima>
            <TextContainer>
                <TextH1>
                    AppClima
                </TextH1>
                <TextP>
                    #ReactJs
                </TextP>
                <TextP>
                    #Fetch Api
                </TextP>
            </TextContainer>
            <ImageContainer>
                <ImgWhitMask
                    src='https://cdn.pixabay.com/photo/2022/06/13/15/36/grain-7260250_960_720.jpg'
                    mask={clima}
                />
            </ImageContainer>

        </ContainerClima>
    )
}

