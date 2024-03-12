import { createSlice, nanoid} from "@reduxjs/toolkit"

const initialState = {
    todos : [ {id : 1, text : "Hello initialState"} ]
}

export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        addTodo : (state,action)=>{
            const todo = {
                id : nanoid(),
                text : action.payload
            }
            state.todos.push(todo)
        },
        removeTodo : (state,action)=>{
            state.todos = state.todos.filter((todo)=>
                todo.id !== action.payload
            )
        }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions    // ye components me kaam aaynge

export default todoSlice.reducer     // Store ko sare reducers ka acces dene ke liye