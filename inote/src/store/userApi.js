import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'


//build api object using "createApi"

const userApi = createApi({
    reducerPath: 'userApi', // Api的标识，不能和其他的Api或reducer重复
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/blogserver/",

        prepareHeaders: (headers, { getState }) => {

           const token =  getState().user.token
            
            headers.set('Authorization',`Bearer ${token}`)
            headers.set('Accpet','*/*')
            return headers
        }
    }),
    tagTypes: ['user','posts','userphoto'],
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
                    
                    
                    return {
                        url: `blog/user/${userId}`,
                        method: 'put',

                        body: user
                    }
                },
                invalidatesTags:['user']
            }),

            isAuth: build.mutation({
                query({token}){
                    
                    return {
                        url:'blog/auth',
                        method:'post',
                        body:{token}
                    }
                }
                
            }),
            getuserById: build.query({ //public search
                query(userid){
                    return `blog/user/public/${userid}`;
                },
                keepUnusedDataFor:60,
                providesTags:['user']
            }),
            getPostsByUser: build.query({ //public search
                query(userid){
                    return `blog/posts/by/public/${userid}`
                },
                keepUnusedDataFor:60,
                providesTags:['posts']
            }),
            
            addFollow: build.mutation({
                query(followId){
                    return {
                        url: `blog/user/add/follow`,
                        method: 'put',

                        body: followId
                    }
                },
                
                invalidatesTags:['user']
            }),
            removeFollow: build.mutation({
                query(unfollowId){
                    return {
                        url: `blog/user/remove/follow`,
                        method: 'put',

                        body: unfollowId
                    }
                },
                invalidatesTags:['user']
            }),
            deletePost: build.mutation({
                query({postId}){
                    
                    return{
                        url:`blog/post/${postId}`,
                        method:'delete'
                    }
                },
                invalidatesTags:['posts']
            }),
            createPost: build.mutation({
                query({userId,post}){
                    return{
                        url: `blog/post/new/${userId}`,
                        method:'post',
                        body:post
                    }
                },
                invalidatesTags:['posts']
            })


        }
    }



})



export const {
    useLoginMutation,
    useSignupMutation,
    useUpdateUserMutation,
    useIsAuthMutation,
    useGetuserByIdQuery,
    useGetPostsByUserQuery,
    useAddFollowMutation,
    useRemoveFollowMutation,
    useDeletePostMutation,
    useCreatePostMutation,
    
} = userApi;

export default userApi;