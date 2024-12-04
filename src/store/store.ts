import { configureStore } from '@reduxjs/toolkit';
import { questionsApi } from './services/questions';
import questionsReducer from './slices/questionsSlice';

export const makeStore = () =>
  configureStore({
    reducer: {
      questionsSlice: questionsReducer,
      [questionsApi.reducerPath]: questionsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(questionsApi.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
