import { createSlice } from "@reduxjs/toolkit";

let number = 0

const listSlice =  createSlice({
  name: 'listExtra',
  initialState: {
    list:[]

  },
  reducers: {
    addList(state, action) {
      state.list.push([{
        name: action.payload.title,
        path: '/newlist',
        reduxName: '',
        filter: '',
        icon: '<AiOutlineUnorderedList/>'
      }])
      number+=1
    },
    removeList(state, action) {
      state.list = state.list.splice(action.numb, action.numb);
    },
  }
})

export const {addList, removeList} = listSlice.actions;

export default listSlice.reducer