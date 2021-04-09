import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import moviesListData from './assets/movies';
import MoviesList from './Components/MoviesList';

function App() {

  const [movies,setMovies] = useState(moviesListData)
const [inputData,setInputData] = useState('')
  return (
    <div className="App">
      <input type="text" onChange={(e)=>{setInputData(e.target.value)}} />
    <MoviesList MoviesArray={
      inputData ? movies.filter((movie) => movie.toLowerCase().includes(inputData.toLowerCase())) 
      : movies

    } />


    </div>
  );
}

export default App;
