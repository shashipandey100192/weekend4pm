import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './Myactionlist';
import mysecondpage from './Mysecondaction';

export const jsstore = configureStore({
    reducer: {
      counter:counterSlice,
      count:mysecondpage

    },
  })