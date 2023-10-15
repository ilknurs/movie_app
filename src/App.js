import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';

import './App.css';
import SearchIcon from './search.svg';
import 'bootstrap/dist/css/bootstrap.css';


const App = () =>{

  const [movies, setMovies] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState('');


  //API
  const API_URL = 'http://www.omdbapi.com/?apikey=b8c4a932';
  
  //API'den verileri almak için bir fonksiyon
  const searchMovies = async (title) => {
    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      setMovies(data.Search);
    }catch(error){
      console.error('Error fetching data: ', error);
    } 
  }

  
// Sayfa yüklendiğinde ve kategori seçildiğinde filtreleme yapmak için etkileşimli olarak kullanılır.
  useEffect(() => {
    searchMovies();
  }, [searchTerm]);


    return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search d-flex justify-content-center my-3">
        <input 
        type="text" 
        placeholder="Search for a movie"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img 
        src={SearchIcon} 
        alt="search"
        onClick={() => searchMovies(searchTerm)}
         />
      </div>
      <div>
        <MovieList movies={movies}/>
      </div>
    
    </div>
  );
}

export default App;
