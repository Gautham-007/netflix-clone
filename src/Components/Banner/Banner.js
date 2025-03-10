import React, { useEffect,useState } from 'react'
import {API_KEY, imageUrl} from '../../constants/constants'
import axios from '../../axios'
import './Banner.css'

function Banner() {
  const [movie, setMovie] = useState()
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      // console.log(response.data.results[0])
      // setMovie(response.data.results[0])
      const movies = response.data.results;
      const randomMovie = movies[Math.floor(Math.random() * movies.length)]; // Pick a random movie
      console.log(randomMovie);
      setMovie(randomMovie);
    })
},[])
  return (
    <div 
    style = {{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path: ""})`}}
    className='banner'>
        <div className='content'>
            <h1 className='title'>{movie? movie.title || movie.name : "Loading"}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'>{movie ? movie.overview: ""}</h1>
        </div>
<div className='fade_bottom'></div>


    </div>
  )
}

export default Banner
