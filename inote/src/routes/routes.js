import { Navigate } from "react-router-dom";
import Forgetpwd from "../components/Forgetpwd";
import Signin from "../components/LoginPage/Signin";
import Signup from "../components/LoginPage/Signup";
import Home from "../views/Home/Home";
import Loginpage from "../views/LoginPage/Loginpage";
import Myblog from "../views/Myblog/Myblog";
import PostLists from '../components/PostLists'
import EditPorfile from "../components/MyblogPage/EditPorfile";
import BlogContent from "../components/MyblogPage/BlogContent";
import BlogEditor from "../components/MyblogPage/BlogEditor";
import PublicBlog from "../views/PublicBlog";
import NeedLogin from "../components/NeedLogin";

export default [
    //public routes
    {
        
        path: '/home',
        element: <Home/>,
        // children:[
        //     {
        //         path:'blogdetail/:blogid',
        //         element:<PublicBlog/>
        //     }
        // ]
    },
    //private routes
    {
        path: '/usercenter/:userid',
        element: <NeedLogin ><Myblog/></NeedLogin>,
        children:[
            {
                path:'',
                element:<PostLists/>
            },
            {
                path:'editprofile',
                element:<EditPorfile/>
            },
            {
                path:'blogdetail/:blogid',
                element:<BlogContent/>
            },
            {
                path:'blogeditor',
                element:<BlogEditor/>
            },
            
        ]
    },
    //public routes
    {
        path:'/auth',
        element:<Loginpage/>,
        children:[
            {
                path:'signup',
                element:<Signup/>
            },
            {
                path:'signin',
                element:<Signin/>
            },
            {
                path:'',
                element:<Signin/>
            },
            {
                path:'forgetpwd',
                element:<Forgetpwd/>
            }
        ]
    },
    {
        path:'/',
        element:<Navigate to={'/home'}/>
    },
    {
        path:'*',
        element:<Navigate to={'/home'}/>
    }
]