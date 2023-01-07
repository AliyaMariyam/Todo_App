import { createSlice,nanoid } from "@reduxjs/toolkit";



 export const todoSlice = createSlice({
    name:'todos',
    initialState:[],

    reducers:{

        addTodo:(state,action) => {
            console.log(nanoid())
            const newTask = {
                id: nanoid(),
                name:action.payload.task
            }
            state.push(newTask);
        },

        deleteTodo:(state,action) =>{
            return state.filter((item)=>item.id !== action.payload.id);
        }


    }

})

export const {addTodo,deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;