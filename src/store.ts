import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import assetsSlice from "./slices/assets.slice";
import multifarmApi from './services/multifarm.service'

export const store = configureStore({
  reducer: {
    [multifarmApi.reducerPath]: multifarmApi.reducer,
    [assetsSlice.name]: assetsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(multifarmApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
