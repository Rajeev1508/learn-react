import {configureStore} from "@reduxjs/toolkit"

import todoReducerFromSlice from "../features/todo/todoSlice"


export const store = configureStore({
    reducer : todoReducerFromSlice
})


// Store sirf reducers se value leta hai means sare resucers ka access hona chaiye.