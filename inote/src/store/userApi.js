import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'


//build api object using "createApi"

const userApi = createApi({
    reducerPath: 'userApi', // Api的标识，不能和其他的Api或reducer重复
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/blogserver/"
    }),
    tagTypes: ['user'],
    endpoints(build) {



        return {
            //login post请求
            login: build.mutation({
                query({ email, password }) {
                    console.log(email,password)
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



        }
    }



})



export const {
    useLoginMutation,
    useSignupMutation
} = userApi;

export default userApi;