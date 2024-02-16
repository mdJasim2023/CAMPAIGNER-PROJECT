import { configureStore } from '@reduxjs/toolkit'

// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { loginApi } from '../services/loginApi'
import userReducer from '../features/users/loginSlice'
export const store = configureStore({
  reducer: {
    login:userReducer,
    [loginApi.reducerPath]:loginApi.reducer
},
middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loginApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)