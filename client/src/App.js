import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Register from './components/Register';
import Login from './components/Login';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { userCurrent } from './JS/userSlice/userSlice';
import Profil from './components/Profil';
import Navbarr from './components/Navbarr';
import { getpets } from './JS/petSlice';
import Pets from './components/Pets';
import Shop from './components/Shop';
import { getproducts } from './JS/productSlice';
import { getveterinaires } from './JS/veterinaireSlice';
import Services from './components/Services';
import { getrequests } from './JS/requestSlice';
import { getcommandes } from './JS/commandeSlice';
import Basket from './components/Basket';
import Todolist from './components/Todolist';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Blog from './components/Blog';
import Home from './components/Home';


function App() {
  const dispatch = useDispatch();
  const [ping, setping] = useState(false);
  useEffect(() => {

      dispatch(userCurrent());
      dispatch(getpets());
      dispatch(getproducts());
      dispatch(getveterinaires());
      dispatch(getrequests());
      dispatch(getcommandes());

  }, [dispatch, ping])
  return (
    <div className="App">
      <Navbarr/>

      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route exact path="/register" element={ <Register/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/profil" element={ <Profil/> } />
        <Route path="/pets" element={ <Pets ping={ping} setping={setping} /> } />
        <Route path="/todolist" element={ <Todolist ping={ping} setping={setping}/> } />
        {/* <Route path="/pet/:id" element={<PetDetails/>} /> */}
        <Route path="/shop" element={ <Shop ping={ping} setping={setping}/> } />
        <Route path="/basket" element={ <Basket ping={ping} setping={setping}/> } />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/dashboard" element={<Dashboard ping={ping} setping={setping}/>} />
      </Routes>

      <Footer/>
    </div>
  );
}


export default App;
