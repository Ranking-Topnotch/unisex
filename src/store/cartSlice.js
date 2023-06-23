import { createSlice } from "@reduxjs/toolkit";
const initialState = [];


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // add(state, action){
    //   state.push(action.payload)
    // },
    //action = instruction
    //payload = specific item
    add(state, action) {
      const itemToAdd = action.payload;
      const itemExists = state.find(item => item.id === itemToAdd.id);

      if (!itemExists) {
        state.push(itemToAdd);
      }
    },

    remove(state, action){
      return state.filter(item => item.id !== action.payload)
    }
  }
})


export const {add, remove } = cartSlice.actions;
export default cartSlice.reducer;