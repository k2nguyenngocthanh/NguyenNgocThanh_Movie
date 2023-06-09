import React, { useEffect, useState } from 'react'
import { movieServ } from '../../../Service/movieService'
import ItemMovie from './ItemMovie';

export default function ListMovie() {
    const [movies, setMovies] = useState([])
    useEffect(()=>{
        movieServ
        .getMovieList()
        .then((res) => {
                
                setMovies(res.data.content)
              })
              .catch((err) => {
     
              });
    },[]);
  return  <div id='listMovie' className='container grid grid-cols-6 gap-10'>
    {movies.map((item)=> {
        return <ItemMovie data={item} key={item.maPhim}/>
    })}
  </div>
  
}
