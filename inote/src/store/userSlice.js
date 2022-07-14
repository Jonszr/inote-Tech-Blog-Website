import {createSlice} from "@reduxjs/toolkit"
import cookie from 'react-cookies'

const token = localStorage.getItem('token');
const currUser = localStorage.getItem('currUser');
const expirationTime =localStorage.getItem('expirationTime')
const userSlice = createSlice(
    {
        name:'userInfo',
        initialState:()=>{
            if(!token){
                return{
                    isLogin:false,
                    token:null,
                    currUser:null,
                    expirationTime:0
                }
            }

            return {
                isLogin:true,
                token,
                currUser,
                expirationTime
            }

        },
        reducers:{
            login(state,action){
                state.currUser = action.payload.user;
                state.token = action.payload.token;
                state.isLogin = true;
                state.expirationTime = action.payload.exp;


                localStorage.setItem('currUser',state.currUser);
                localStorage.setItem('token',state.token)
                localStorage.setItem('expirationTime', state.expirationTime)
                console.log('login successfully')
                
            },
            logout(state,action){
                state.isLogin=false
                state.expirationTime = 0;
                state.currUser = null;
                state.token = null;


                localStorage.removeItem('currUser',state.currUser);
                localStorage.removeItem('token',state.token);
                localStorage.removeItem('expirationTime', state.expirationTime);

                console.log('logout successfully')
            },
            setUser(state,action){
               state.currUser = action.payload;
               console.log("set user") 
            },
            signOutUser(state,action){
                state.currUser = null;
                state.isLogin = false;
                console.log('Signout successfully')
            },
            setToken(state,action){
                state.token =action.payload;
                state.isLogin = true;
            }
        }
    }
)
export default userSlice;
export const {setUser,signOutUser,setToken,login,logout} = userSlice.actions;