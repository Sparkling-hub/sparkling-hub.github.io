


import { configureStore } from '@reduxjs/toolkit';
import mapsReducer from '@/store/redusers/mapsSliceReduser';


const store = configureStore({
  reducer: {
    maps: mapsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;