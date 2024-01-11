


import { configureStore } from '@reduxjs/toolkit';
import mapsReducer from '@/store/redusers/mapsSliceReduser';
import formsReducer from '@/store/redusers/formsSliceReduser';

const store = configureStore({
  reducer: {
    maps: mapsReducer,
    forms: formsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;