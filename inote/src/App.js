
import Navbar from "./components/Navbar";
import Footer from './components/Footer'
import Loginpage from "./views/LoginPage/Loginpage";
import { BrowserRouter, Navigate, Routes,Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Myblog from "./views/Myblog/Myblog";

function App() {
  return (
    < >
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route index  element={<Home/>}></Route>
          <Route  path="/login"  element={<Loginpage/>}></Route>
          <Route path="/myblog" element={<Myblog/>}></Route>
          <Route path="*"  element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
      
      {/* <Hero/>
      <PublicPosts/> */}
      <Footer/>
    </>
  );
}

export default App;
