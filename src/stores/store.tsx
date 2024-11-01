import { configureStore } from '@reduxjs/toolkit';
import ToggleSlice from './toogle-slice';
import SearchSlice from './search-slice';

export const store = configureStore({
  reducer: {
    toggle: ToggleSlice,
    search: SearchSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
