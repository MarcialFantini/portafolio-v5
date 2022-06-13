import React from 'react'
import svgCells from './cels.svg'
import { ImgSvg, PortadaContainer, TextPortada, Text, TitleText, TitleTextLastName } from './styles'

const Portada = () => {
    return (
        <PortadaContainer>
            <ImgSvg src={svgCells} alt="" />
            <TextPortada>
                <Text>Soy un front-end developer</Text>
                <TitleText>MARCIAL</TitleText>
                <TitleTextLastName active={true} >Fantini</TitleTextLastName>
            </TextPortada>
        </PortadaContainer>
    )
}

export default Portada