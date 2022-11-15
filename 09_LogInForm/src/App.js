import { useState } from 'react';
import './App.css';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className='container'>
        <Header />
        <Content />
        <Footer />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
