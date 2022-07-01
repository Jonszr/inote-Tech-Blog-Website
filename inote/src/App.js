
import Navbar from "./components/Navbar";
import Footer from './components/Footer'
import Loginpage from "./views/LoginPage/Loginpage";
import { BrowserRouter, Navigate, Routes, Route, useRoutes } from "react-router-dom";
import Home from "./views/Home/Home";
import Myblog from "./views/Myblog/Myblog";
import routes from "./routes";
import getUser from "./database/User"
function App() {
  
  const mainRoutes = useRoutes(routes);
  return (
    < >
      <Navbar />
      {mainRoutes}
      <Footer />
    </>
  );
}

export default App;
