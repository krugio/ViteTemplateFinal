import { createSlice } from '@reduxjs/toolkit'

const initialState = {
open_modal:false,
}

export const slice = createSlice({
  name: 'ModalNewUser',
  initialState,
  reducers: {

    setOpenModalNewUser(state,{payload}){
     state.open_modal = payload.open;
    },

   
  },
})

export const {setOpenModalNewUser} = slice.actions
export default slice.reducer