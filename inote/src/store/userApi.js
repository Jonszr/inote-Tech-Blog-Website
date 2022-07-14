import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'


//build api object using "createApi"

const userApi = createApi({
    reducerPath: 'userApi', // Api的标识，不能和其他的Api或reducer重复
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/blogserver/",

        prepareHeaders: (headers, { getState }) => {




            return headers
        }
    }),
    tagTypes: ['user'],
    endpoints(build) {



        return {
            //login post请求
            login: build.mutation({
                query({ email, password }) {

                    return {
                        url: 'blog/signin',
                        method: 'post',
                        body: {
                            email,
                            password
                        }
                    }
                }


            }),
            //signup post请求
            signup: build.mutation({
                query({ email, password, name }) {

                    return {
                        url: 'blog/signup',
                        method: 'post',
                        body: {
                            email,
                            password,
                            name
                        }
                    }
                }
            }),

            //updateUser post
            updateUser: build.mutation({
                query({ userId,user }) {
                    // var urlencoded = new URLSearchParams();
                    // urlencoded.append("about", "I like coding so much");
                    
                    return {
                        url: `blog/user/${userId}`,
                        method: 'put',

                        headers:{
                            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYyOWFkNWIxOWUzODZjMTY5OWIzNGNkNSIsIm5hbWUiOiJqb25zaGkiLCJlbWFpbCI6ImpvbnNoaUBnbWFpbC5jb20iLCJmb2xsb3dpbmciOltdLCJmb2xsb3dlcnMiOltdLCJyb2xlIjoic3Vic2NyaWJlciIsImNyZWF0ZWQiOiIyMDIyLTA2LTA0VDAzOjQ2OjU3LjIyMloiLCJfX3YiOjAsImFib3V0IjoiSSBsaWtlIGNvZGluZyIsInVwZGF0ZWQiOiIyMDIyLTA2LTA5VDAxOjI3OjEzLjA0MVoifSwiaWF0IjoxNjU2OTc2NjQ3fQ.zxu90zEWdmjjfN5TJhz45bv-v0Q5eJVNaHo3AyRGgpQ"
                        },

                        body: user
                    }
                }
            })



        }
    }



})



export const {
    useLoginMutation,
    useSignupMutation,
    useUpdateUserMutation
} = userApi;

export default userApi;