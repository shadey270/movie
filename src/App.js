import React, { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './Search.svg'
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com?apikey=f39f5f9d';
const movie ={
  "Title": "Amazing Spiderman Syndrome",
  "Year": "2012",
  "imdbID": "tt2586634",
  "Type": "movie",
  "Poster": "N/A"
}

function App() {
  const [movies, setMovies] = useState([])
  const [searchMovie, setSearchMovie] = useState('')
const searchMovies = async (title) => {
  const response = await fetch(`${API_URL}&s=${title}`);
  const data = await response.json();

  setMovies(data.Search)
}

  useEffect(() => {
    searchMovies('spiderman')
  }, [])
  return (
    <div className="app">
      <h1>Movie Arena in Nigeria</h1>
      <div className= 'search'>
        <input 
          placeholder='search for movies'
          value={searchMovie}
          onChange={(e) => setSearchMovie(e.target.value)}
        />
        <img
          src='SearchIcon'
          alt='search'
          onClick={() => searchMovies(searchMovie)} 
        />
      </div>
      {movies?.length > 0 ? (
        <div className='container'>
       {movies.map( (movie) => ( <MovieCard movie={movie} />))}
      </div>
      ):(
        <div className='empty'>
          <h3> no movies found</h3>
        </div>
      )}
      
    </div>
  );
}

export default App;
