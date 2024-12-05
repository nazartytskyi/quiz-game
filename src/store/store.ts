import { configureStore } from '@reduxjs/toolkit';
import { questionsApi } from './services/questions';
import gameReducer from './slices/gameSlice';

export const makeStore = () =>
  configureStore({
    reducer: {
      gameSlice: gameReducer,
      [questionsApi.reducerPath]: questionsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(questionsApi.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
