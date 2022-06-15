import React from 'react'
import { ContainerImage, ContainerText, ImgWhitMask, TextH1, TextP, WorkTodooContainer } from './styled'
import IntentoImg from './intento.png'

const WorkTodoo = () => {
    return (
        <WorkTodooContainer>
            <ContainerText>
                <TextH1>
                    Todoo List
                </TextH1>
                <TextP>
                    #Reactjs
                </TextP>
                <TextP>
                    #redux-toolkit
                </TextP>
                <TextP>
                    #styledComponents
                </TextP>
            </ContainerText>
            <ContainerImage>
                <ImgWhitMask src='https://cdn.pixabay.com/photo/2022/05/12/12/55/sunset-7191546_960_720.jpg'
                    mask={IntentoImg}
                />
            </ContainerImage>
        </WorkTodooContainer>
    )
}

export default WorkTodoo