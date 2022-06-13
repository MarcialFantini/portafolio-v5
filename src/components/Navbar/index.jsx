import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { alteredDark, alteredLight } from '../../storeRedux/slice/themesGlobals/themesGlobalsSlice'
import { BtnActiveNav, ImgHome, Li, Nav, NavbarStyled, Ul } from './styled'

const Navbar = () => {

    const dispatch = useDispatch()
    const [activeDark, setActiveDark] = useState(true)
    const [position, setPosition] = useState('-70%')

    const isPosition = () => {
        if (position === "-70%") {
            setPosition("0")
        } else {
            setPosition("-70%")
        }
    }

    const handlerActive = () => {
        setActiveDark(!activeDark)
    }

    useEffect(() => {
        if (activeDark === true) {
            dispatch(alteredDark())
        } else {
            dispatch(alteredLight())
        }

    }, [activeDark])

    const theme = useSelector(state => state.themes.theme)

    return (
        <NavbarStyled theme={theme}  >
            <ImgHome theme={theme} src="" alt="" />
            <BtnActiveNav onClick={isPosition} theme={theme}>
                Active
            </BtnActiveNav>
            <Nav theme={theme}
                position={position}
            >
                <Ul theme={theme}>
                    <Li theme={theme}>Inicio</Li>
                    <Li theme={theme}>Habilidades</Li>
                    <Li theme={theme}>Proyectos</Li>
                    <Li theme={theme}
                        onClick={handlerActive}
                    >Tema {activeDark ? "calido" : "frio"}</Li>
                </Ul>
            </Nav>
        </NavbarStyled>
    )
}

export default Navbar