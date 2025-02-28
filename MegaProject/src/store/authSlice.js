import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload;
            console.log("User Logged In:", state.userData); // ✅ Debugging inside the reducer
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
            console.log("User Logged Out"); // ✅ Debugging inside the reducer
        }
    }
});

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;
