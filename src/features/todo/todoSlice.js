import { createSlice, nanoid } from "@reduxjs/toolkit";
//nanoid is uded to Generate unique id

//Initital state of Store it may be array or object
const initialState = {
    //This is State
    todos: [{ id: 1, text: "Hello world" }]
}

//Let us make Slice(bigger version of reducer(functionality))

export const todoSlice = createSlice({
    name: "todo",
    //initialState--We can add definition here also instead defining above
    initialState,
    //Defining reducer
    reducers: {
        //alway we get state(state at that time) and action(acces to variable or props passed)

        //Here comes the deffrence from context API--There we add only function we dont define it but here we have to define function

        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload.text
            }

            //Now add this todo to the state

            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
        },

        //UpdateTodo


    }
})

//Apart from exporting todoSlice We need to export two part of todoslice
//1.Fuctionallity--This functionality will come in use individually
export const { addTodo, removeTodo } = todoSlice.actions;
//2.The Store that we make should also be aware of all reducers so we need to export reducers ---because the store is resctrictive store ie ye kisi se bhi vale le ke update nhi karega--jo jo aap reducer register karoge wahi se lega value update kane ke liye
export default todoSlice.reducer;
