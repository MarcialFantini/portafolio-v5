import React from 'react'
import { ActiveNabvar, Bar1, Bar2, Bar3, Icon, NavbarContainer } from './styled'

const Navbar = () => {
    return (
        <NavbarContainer>
            <Icon />
            <ActiveNabvar>
                <Bar1 />
                <Bar2 />
                <Bar3 />
            </ActiveNabvar>
        </NavbarContainer>
    )
}

export default Navbar