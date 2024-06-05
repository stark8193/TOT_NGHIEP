import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './sildes/counterSlide'
import userReducer from './sildes/userSlide'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer
  },
})