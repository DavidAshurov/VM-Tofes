import {configureStore} from "@reduxjs/toolkit";
import shiftReducer from "../features/shiftSlice.ts";
import employeesReducer from "../features/employeesSlice.ts";
export const store = configureStore({
    reducer: {
        shiftReducer: shiftReducer,
        employeesReducer:employeesReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch