import React from 'react'
import { Bar1, Bar2, CubeNeon, PortadaContainer, TextContainerP, TextH1, TextP, TextTitleContainer } from './styled'

const Portada = () => {
    return (
        <PortadaContainer>
            <Bar1><CubeNeon /><CubeNeon inverted={true} /></Bar1>
            <Bar2><CubeNeon /><CubeNeon inverted={true} /></Bar2>
            <TextContainerP>
                <TextP>
                    Soy programador Front-End
                </TextP>
            </TextContainerP>
            <TextTitleContainer>
                <TextH1>
                    Marcial
                </TextH1>
                <TextH1 active={true} >
                    Fantini
                </TextH1>
            </TextTitleContainer>
        </PortadaContainer>
    )
}

export default Portada