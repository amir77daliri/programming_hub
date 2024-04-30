import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { loginApi } from './AuthApi';


const initialState = {
    isAuthenticated: false,
    user: {
        id: null,
        name: '',
        email: '',
        role: ''
    },
    token: '',
    error: ''
};

export const loginAsync = createAsyncThunk('auth/login', async (loginData) => {
    const response = await loginApi(loginData)
    return response.data;
})


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.isAuthenticated = false
            state.user = { id: null, name: '', email: '', role: '' }
            state.token = ''
        },
        removeError: (state) => {
            state.error = ''
        },
        setInfo: (state, {payload}) => {
            state.isAuthenticated = true
            state.error = ''
            state.token = payload.token
            state.user = {
                id: payload.id,
                name: payload.name,
                email: payload.email,
                role: payload.role
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginAsync.fulfilled, (state, action) => {
            if (action.payload.msg === 'success') {
                const userInfo = {
                    user: {
                        id: action.payload.id,
                        name: action.payload.name || '',
                        email: action.payload.email,
                        role: action.payload.role
                    }, 
                    token: action.payload.token,
                    expire: new Date()
                }
                localStorage.setItem('token', JSON.stringify(userInfo))
                return {
                    isAuthenticated: true,
                    user: {
                        id: action.payload.id,
                        name: action.payload.name || '',
                        email: action.payload.email,
                        role: action.payload.role
                    },
                    token: action.payload.token,
                    error: ''
                }
            } else {
                return {
                    isAuthenticated: false,
                    user: {
                        id: null,
                        name: '',
                        email: '',
                        role: ''
                    },
                    token: '',
                    error: 'ایمیل یا رمز عبور اشتباه است !'
                }
            }
        })
    }
})

export const { logout, removeError, setInfo } = authSlice.actions;
export default authSlice.reducer;