import { configureStore } from "@reduxjs/toolkit";
import textSlice from './slice/textSlice';

export const store = configureStore({
    reducer: {
        textItem:textSlice,
    }})