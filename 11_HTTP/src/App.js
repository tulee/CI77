import './App.css';
import { useState } from "react";
import ThemeContextProvider from './context/ThemeContext';
import SearchBar from './components/SearchBar/SearchBar';
import FilmList from './components/FilmList/FilmList';
import { Route, Routes } from 'react-router-dom';
import FilmSeachList from './components/FilmSearchList/FilmSearchList';


function App() {

  return (
    <ThemeContextProvider>
        <div className="container">
          <h1 className='header'>phimmoi.com</h1>
          <SearchBar />
          <Routes>
            <Route path='/' element={<FilmList />} />
            <Route path='/search/:searchTerm' element={<FilmSeachList />} />
          </Routes>
        </div>
    </ThemeContextProvider>
  );
}

export default App;
