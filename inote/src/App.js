
import Navbar from "./components/Navbar";
import Footer from './components/Footer'
import Loginpage from "./views/LoginPage/Loginpage";
import { BrowserRouter, Navigate, Routes, Route, useRoutes ,useMatch} from "react-router-dom";
import Home from "./views/Home/Home";
import Myblog from "./views/Myblog/Myblog";
import routes from "./routes";
import getUser from "./database/User"
import { getUserByToken, signup } from './fetches'
import { useEffect, useState, memo } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { setToken, setUser } from './store/userSlice'
import cookie from 'react-cookies'

const App = (props) => {
  const UsemainRoutes =  ()=>{
    const mainRoutes = useRoutes(routes);
    return mainRoutes
  }
  
  const initUser = useSelector(state => state.user);
  
  const dispatch = useDispatch();

  



  // useEffect(() => {
  //   const token = cookie.load('token')
  //   console.log(token)
  //   if(token&&!initUser.currUser){
  //     console.log('gettoken again')
  //     dispatch(setToken(token));
  //     getUserByToken(token)
  //     .then(result => {
  //       dispatch(setUser(result.user))
  //     })
  //     return;
  //   }
  //   console.log(initUser.token)
  //   // if user token information change then update user information.
  //   if(token&&initUser.token !== token){
  //     console.log('gettoken again') 
  //     getUserByToken(token)
  //     .then(result => {
  //       dispatch(setUser(result.user))
  //     })
  //     return;
  //   }
    

  //   console.log('app装载');
  //   return () => {
  //     console.log('app卸载')

  //   }


  // })

  return (
    <>
      <Navbar />        
        <UsemainRoutes/>
      <Footer />
    </>
  );
}





//  class App extends Component {
//   render() {
//     return (
//       <div>App</div>
//     )
//   }
// }

export default App;
