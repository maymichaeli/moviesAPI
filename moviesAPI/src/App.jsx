import { useState, useEffect } from 'react'
import './App.css'
import { Header } from './components/Header.jsx'
import { Search } from './components/Search.jsx'
import { Cards } from './components/Cards.jsx'
import { Card } from './components/Card.jsx'
const API_URL ="http://localhost:3000/api/movies";

function App() { 
  const [movies , setMovies] = useState([]);
  const [searchMovie, setSearchMovie]= useState("");

  useEffect(()=>{
    fetch(API_URL)
    .then(response =>response.json())
    .then(data=> {
      console.log(data)
      setMovies(data.results)
    })
    .catch(error=> console.error("Error fatching movies:", error))
  }, []);

  const filteredMovies = searchMovie
  ? movies.filter(movie => 
      movie.title && movie.title.toLowerCase().includes(searchMovie.toLowerCase())
    )
  : movies;

  return (
    <>
    <Header/>
    <Search searchMovie={searchMovie} setSearchMovie={setSearchMovie}/>
    <Cards movies={filteredMovies} />
    <Card></Card>
    </>
  )
}

export default App
