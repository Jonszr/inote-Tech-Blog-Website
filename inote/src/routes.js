import { Navigate } from "react-router-dom";
import Forgetpwd from "./components/Forgetpwd";
import Signin from "./components/LoginPage/Signin";
import Signup from "./components/LoginPage/Signup";
import Home from "./views/Home/Home";
import Loginpage from "./views/LoginPage/Loginpage";
import Myblog from "./views/Myblog/Myblog";
import PostLists from './components/PostLists'
import EditPorfile from "./components/MyblogPage/EditPorfile";
import BlogContent from "./components/MyblogPage/BlogContent";
import BlogEditor from "./components/MyblogPage/BlogEditor";

export default [
    {
        
        path: '/home',
        element: <Home/>
    },
    {
        path: '/myblog',
        element: <Myblog/>,
        children:[
            {
                path:'allblogs',
                element:<PostLists/>
            },
            {
                path:'editprofile',
                element:<EditPorfile/>
            },
            {
                path:'blogdetail',
                element:<BlogContent/>
            },
            {
                path:'blogeditor',
                element:<BlogEditor/>
            },
            {
                path:'',
                element:<Navigate to={'allblogs'}/>
            }
        ]
    },
    {
        path:'/login',
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