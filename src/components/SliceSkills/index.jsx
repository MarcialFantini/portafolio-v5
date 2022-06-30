import React from 'react'
import { useState } from 'react'
import { BtnNext, Carrusel, Container, ImagesCarrusel } from './styled'

import src1 from '../SliceSkills/react.png'
import src2 from '../SliceSkills/js.png'
import src3 from '../SliceSkills/css.png'
import src4 from '../SliceSkills/html.png'
import { useEffect } from 'react'

function SliceSkills() {
    const initialValues = ["0%", "-100%", "-200%", "-300%"]
    const [value, setValue] = useState(0)

    const nextImage = () => {
        if (value === 3) {
            setValue(0)
        } else {
            setValue(value + 1)
        }
    }
    const beforeImage = () => {
        if (value === 0) {
            setValue(3)
        } else {
            setValue(value - 1)
        }
    }
    useEffect(() => {
        const interval = setTimeout(() => {
            nextImage()
        }, 3000)
        return () => clearInterval(interval)
    }, [value])

    return (
        <Container>

            <BtnNext
                left={true}
                onClick={beforeImage}

            >
                {"<-"}
            </BtnNext>
            <BtnNext
                left={false}
                onClick={nextImage}

            >{"->"}
            </BtnNext>
            <Carrusel
                position={initialValues[value]}>
                <ImagesCarrusel
                    src={src1}
                />
                <ImagesCarrusel
                    src={src2}
                />
                <ImagesCarrusel
                    src={src3}
                />
                <ImagesCarrusel
                    src={src4}
                />
            </Carrusel>
        </Container>
    )
}

export default SliceSkills