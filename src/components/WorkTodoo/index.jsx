import React from 'react'
import { ContainerImage, ContainerText, ImgWhitMask, TextH1, TextP, WorkTodooContainer } from './styled'
import IntentoImg from './intento.png'
import Todoo from './Todoo.PNG'

const WorkTodoo = () => {
    return (
        <WorkTodooContainer>
            <ContainerText>
                <TextH1>
                    Todoo List
                </TextH1>
                <TextP>
                    Aplicación para manejar tareas del dia a dia.
                </TextP>
                <TextP>
                    #Reactjs #JavaScript #Html5 #Css3 #Redux-Toolkit
                </TextP>

            </ContainerText>
            <ContainerImage>
                <ImgWhitMask src={Todoo}
                    mask={IntentoImg}
                />
            </ContainerImage>
        </WorkTodooContainer>
    )
}

export default WorkTodoo