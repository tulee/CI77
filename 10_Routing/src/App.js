import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Auth from './components/Auth';
import Cart from './components/Cart';
import Invoices from './components/Invoices';
import Login from './components/Login';
import Product from './components/Product';
import ProductDetail from './components/ProductDetail';
import Profile from './components/Profile';
import Register from './components/Register';
import Shop from './components/Shop';
import ThemeContextProvider, { ThemeContext } from './context/ThemeContext';
import { useContext, useEffect } from "react";


function App() {
  const {isLogin, setIsLogin} = useContext(ThemeContext)
  const navigate = useNavigate()
  
  useEffect(()=>{
    if(!isLogin){
      navigate("/auth")
    }
  },[])

  return (
      <div className='container'>
        <Routes>
          <Route path='/auth' element={<Auth />}>
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
          </Route>
          <Route path='/' element={<Shop />}>
            <Route path='products' element={<Product />} >
              <Route path=':productId' element={<ProductDetail />}/>
            </Route>
            <Route path='invoices' element={<Invoices />} />
            <Route path='cart' element={<Cart />} />
            <Route path='profile' element={<Profile />} />
            <Route path='about' element={<About />} />
          </Route>
        </Routes>
      </div>
  );
}

export default App;
