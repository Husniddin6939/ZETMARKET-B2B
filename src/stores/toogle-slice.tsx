import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface IToogleState {
  isOpen: Boolean;
}

const initialState: IToogleState = {
  isOpen: true,
};

export const ToggleSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    toggleAside: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleAside } = ToggleSlice.actions;

export default ToggleSlice.reducer;
