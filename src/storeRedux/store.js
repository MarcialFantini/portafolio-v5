import { configureStore } from "@reduxjs/toolkit";
import themesGlobals from "./slice/themesGlobals/themesGlobalsSlice";


export const store = configureStore({
    reducer: {
        themes: themesGlobals
    }
})