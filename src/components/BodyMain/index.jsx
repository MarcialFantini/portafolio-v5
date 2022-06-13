import React from 'react'
import { useSelector } from 'react-redux'
import { Body } from './styled'

const BodyMain = (props) => {
    const theme = useSelector(state => state.themes.theme)

    return (
        <Body theme={theme} >{props.children}</Body>
    )
}

export default BodyMain