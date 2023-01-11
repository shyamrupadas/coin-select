import { combineReducers, configureStore } from '@reduxjs/toolkit';
import categorySlice from './categorySlice'
import { useDispatch } from 'react-redux';
import directionSlice from './directionSlice';

const rootReducer = combineReducers({
  categorySlice,
  directionSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

