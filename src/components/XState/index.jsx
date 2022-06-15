import React from 'react'
import { ImageContainer, ImgWidtMask, TextContainer, TextH1, TextP, XStateContainer } from './styled'
import BarrMask from './barrMask.png'

const XState = () => {
    return (
        <XStateContainer>
            <TextContainer>
                <TextH1>
                    XState
                </TextH1>
                <TextP>
                    #Reactjs
                </TextP>
                <TextP>
                    #Xstate
                </TextP>
            </TextContainer>
            <ImageContainer>
                <ImgWidtMask src='https://cdn.pixabay.com/photo/2022/05/13/10/35/flower-7193390_960_720.jpg'
                    mask={BarrMask}
                />
            </ImageContainer>

        </XStateContainer>
    )
}

export default XState