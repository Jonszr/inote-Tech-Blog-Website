
import Navbar from "./components/Navbar";
import Footer from './components/Footer'

import { useRoutes } from "react-router-dom";

import routes from "./routes/routes";
import { useUpdateUserMutation } from "./store/userApi";
import { useEffect, useRef, useState } from "react";
import img from './assets/imgcard.jpg'




const App = () => {
  const UsemainRoutes = () => {
    const mainRoutes = useRoutes(routes);
    return mainRoutes
  }
  const [photo,setPhoto] = useState();
  const file = useRef();
  const [updateUser, {isSuccess}]=useUpdateUserMutation();
  const handleUpdate = ()=>{
    console.log(photo)
    var data = new FormData();
    data.set("name","userupadte")
    data.set("photo",photo)
    updateUser({userId:'62c3891b4f5013a4ee3f009a',user:data})
  }
  useEffect(()=>{
    
  },[photo])

  return (
    <> 
      <input ref={file} onChange={(e)=>{setPhoto(e.target.files[0])}} type={'file'}  accept={'image/*'}>
      </input>
      <button onClick={handleUpdate}>
        update
      </button>
      
      <Navbar />        
        <UsemainRoutes/>
      <Footer />
    </>
  );
}


export default App;
