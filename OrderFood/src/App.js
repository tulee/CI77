import './App.css';
import { useState } from "react";
import ThemeContextProvider from './context/ThemeContext';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import CartBoard from './components/CartBoard/CartBoard';

function App() {

  return (
    <ThemeContextProvider>
        <div className="container">
          <Header />
          <CartBoard />
          <Content />
        </div>
    </ThemeContextProvider>
  );
}

export default App;
