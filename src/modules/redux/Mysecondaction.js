import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 100,
  }

  export const mysecondSlicer = createSlice({
    name: 'count',
    initialState,
    reducers: {
      myfunc: (state) => {
        state.value = 900;
      }
    },
  })                            


export const {myfunc} = mysecondSlicer.actions

export default mysecondSlicer.reducer