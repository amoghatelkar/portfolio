import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'

// Define a type for the slice state
interface IUIState {
  active: number;
  theme:string;
}

// Define the initial state using that type
const initialState: IUIState = {
  active: 0,
  theme:'light'
}

export const uiSlice = createSlice({
  name: 'ui',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setActive: (state,action:PayloadAction<number>) =>{
        state.active = action.payload;
    },
    setTheme: (state,action:PayloadAction<string>) =>{
        state.theme = action.payload;
    },
  },
})

export const { setActive, setTheme } = uiSlice.actions;

export const uiReducer =  uiSlice.reducer