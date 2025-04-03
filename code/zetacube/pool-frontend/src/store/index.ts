import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import poolReducer from './slices/poolSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    pool: poolReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch