import { configureStore } from '@reduxjs/toolkit';
import alertReducer from '../features/alertSlice';
import userReducer from '../features/userSlice';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';

const store = configureStore({
  reducer: {
    alert: alertReducer,
    user: userReducer,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
