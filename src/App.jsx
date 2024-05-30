import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Result from './components/Result';
const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
function App() {
  const [movies,setMovies]=useState([1 ]);
  const [search,setSeacrch]=useState("")

 const getSearchedMovies=()=>{
  console.log(SEARCHAPI+search)
   axios.get(
    SEARCHAPI+search
   )
   .then((response)=>{
    console.log(response.data.results)
    setMovies(response.data.results);
   })
   .catch((error)=>{
    console.log(error)
   })
 } 
  useEffect(()=>{
    if(search==""){
      getAllMovies()
    }
    else{
      getSearchedMovies()
    }
  },[search])

  const getAllMovies=()=>{
   axios.get(APIURL)
   .then((response)=>{
     setMovies(response.data.results)
     
   })
   .catch(
    (error)=>{
      console.log(error)
    }
   )
  }
const changeTheSearch=(e)=>{
  setSeacrch(e.target.value)
}
  return (
   
        <div className="max-w-[1240px] shadow-xl min-h-[400px] mx-auto  p-3">
          <input type="search" 
          value={search}
          className='w-full border border-black rounded text-slate-400 p-4 '
          onChange={changeTheSearch}/>
        <Result movies={movies} />
        </div>
  )
}

export default App