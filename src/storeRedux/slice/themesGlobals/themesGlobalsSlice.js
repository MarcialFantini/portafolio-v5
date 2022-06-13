import { createSlice } from "@reduxjs/toolkit"
import { styledLight, styledDark } from "../../../styles"


const initialState = {
    theme: styledLight
}

export const themesGlobalsSlice = createSlice({
    name: "themes",
    initialState,
    reducers: {
        alteredDark: (state) => {
            state.theme = styledDark
        },
        alteredLight: (state) => {
            state.theme = styledLight
        }
    }
})

export const { alteredDark, alteredLight } = themesGlobalsSlice.actions

export default themesGlobalsSlice.reducer