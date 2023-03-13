import { createSlice } from "@reduxjs/toolkit";
const cratSlice =createSlice({
    name: "crat",
    initialState: [],
    reducers: {
        addCrate: (state, action) => {
            const finedProduct = state.find((product)=> product.id === action.payload.id);
            if(finedProduct){
                finedProduct.count += 1;
            }else{
                const stateClone = {...action.payload,count:1}
                state.push(stateClone)
            }
        },
        deleteCrate: (state, action) => {
            state.splice(action.payload, 1)
        },
        clearCarte: (state, action) => {
            return state=[]
        }

    }
})
export const { addCrate, deleteCrate, clearCarte } = cratSlice.actions;
export default cratSlice.reducer;