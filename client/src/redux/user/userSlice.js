import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    currentUser : null,
    error : null,
    loading : false
}

const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {
        signInStart : (state) =>{
            state.loading = true;
            state.error - null
        },

        signInSuccess : (state, action) =>{
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },

        signInFailure : (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

// export reducer
export default userSlice.reducer;

// export actions
export const {signInStart, signInFailure, signInSuccess} = userSlice.actions;