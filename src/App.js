import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Allproduct from "./Components/Allproduct";
import ProductIdDetailes from "./Components/ProductIdDetailes";
import Home from "./Components/Home";
import {Route, Routes } from 'react-router-dom';
import Cart from "./Components/Cart";



function App() {
  return (
    <>

   <Navbar/>
   <Routes>   
      <Route path='' element={<Home/>} />
      <Route path='/Home' element={<Home/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Contact' element={<Contact/>} />
      <Route path='/Product' element={<Allproduct/>} />
      <Route path='/Cart' element={<Cart/>} />
      <Route path='/Product/:ProductId' element={<ProductIdDetailes/>} />
     
   
    </Routes>
   {/* <Slider/>
   <Featured/>
   <Productcat/> */}
  <Footer/>
   </>
  );
}

export default App;
