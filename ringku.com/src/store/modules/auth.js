import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthService } from "../../service/AuthService";
import { ActionType } from "../../util/type/store.js";

/**
 * @typedef {Object} LoginResponse
 * @property {string} token
 * @property {string} responseCode
 */

/**
 * @typedef {Object} LoginRequest
 * // Define the properties of LoginRequest here
 */

/**
 * @typedef {Object} InitiateSignupRequest
 * // Define the properties of InitiateSignupRequest here
 */

/**
 * @typedef {Object} CompleteSignupRequest
 * // Define the properties of CompleteSignupRequest here
 */

/**
 * @typedef {Object} InitiatePasswordResetRequest
 * // Define the properties of InitiatePasswordResetRequest here
 */

/**
 * @typedef {Object} AuthState
 * @property {string} token
 * @property {boolean} loading
 * @property {LoginResponse} userInfo
 * @property {InitiateSignupRequest} signUpInfo
 */

/** @type {AuthState} */
const initialState = {
    token: "",
    loading: false,
    userInfo: /** @type {LoginResponse} */ ({}),
    signUpInfo: /** @type {InitiateSignupRequest} */ ({}),
};

const action = {
    login: createAsyncThunk("auth/login", async (payload, thunkAPI) => {
        return (await AuthService.login(thunkAPI, payload.data)).data;
    }),
    signup: createAsyncThunk("auth/signup", async (payload, thunkAPI) => {
        return (await AuthService.initiateEnrollment(thunkAPI, payload.data)).data;
    }),
    completeSignup: createAsyncThunk("auth/completeSignup", async (payload, thunkAPI) => {
        return (await AuthService.completeEnrollment(thunkAPI, payload.data)).data;
    }),
    initiatePasswordReset: createAsyncThunk("auth/initiatePasswordReset", async (payload, thunkAPI) => {
        return (await AuthService.initiatePasswordReset(thunkAPI, payload.data)).data;
    }),
};

const slice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken(state, { payload }) {
            state.token = payload;
        },
        setLoading(state, { payload }) {
            state.loading = payload;
        },
        setUserInfo(state, { payload }) {
            state.userInfo = payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(action.login.pending, (state) => {
                state.loading = true;
            })
            .addCase(action.login.fulfilled, (state, action) => {
                const response = action.payload;
                state.loading = false;
                state.token = response.token;
                localStorage.token = response.token;
                state.userInfo = response;
                if (response.responseCode === "00") action.meta.arg.onSuccess?.(action.payload);
                else {
                    action.meta.arg.onError?.(action.payload);
                }
            })
            .addCase(action.signup.pending, (state) => {
                state.loading = true;
            })
            .addCase(action.signup.fulfilled, (state, action) => {
                const response = action.payload;
                state.loading = false;
                state.userInfo = response;
                if (response.responseCode === "00") action.meta.arg.onSuccess?.(action.payload);
                else {
                    action.meta.arg.onError?.(action.payload);
                }
            })
            .addCase(action.completeSignup.pending, (state) => {
                state.loading = true;
            })
            .addCase(action.completeSignup.fulfilled, (state, action) => {
                const response = action.payload;
                state.loading = false;
                state.userInfo = response;
                if (response.responseCode === "00") action.meta.arg.onSuccess?.(action.payload);
                else {
                    action.meta.arg.onError?.(action.payload);
                }
            })
            .addCase(action.initiatePasswordReset.pending, (state) => {
                state.loading = true;
            })
            .addCase(action.initiatePasswordReset.fulfilled, (state, action) => {
                const response = action.payload;
                state.loading = false;
                state.userInfo = response;
                if (response.responseCode === "00") action.meta.arg.onSuccess?.(action.payload);
                else {
                    action.meta.arg.onError?.(action.payload);
                }
            });
    },
});

export const auth = {
    reducer: slice.reducer,
    action: action,
    mutation: slice.actions,
};
