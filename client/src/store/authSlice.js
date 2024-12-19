import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},    
  isLoading: false, 
  isError: false,  
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
        console.log("res ", action.payload.user);
        state.user = action.payload.user;
    },
    clearUser: (state) => {
        state.user = null;
        state.token = null;
    },
    setAuthLoading: (state, action) => {
        state.isLoading = action.payload;
    },
    setAuthError: (state, action) => {
        state.isError = action.payload;
    },
},
});

export const { setUser, clearUser, setAuthLoading, setAuthError } = authSlice.actions;
export default authSlice.reducer;
