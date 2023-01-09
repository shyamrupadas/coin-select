import { combineReducers, configureStore } from '@reduxjs/toolkit';
import categorySlice from './categorySlice'
import { useDispatch } from 'react-redux';

const rootReducer = combineReducers({
  categorySlice
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

