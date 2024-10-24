import React, { useEffect, useState } from "react";
import movieTrailer from "movie-trailer";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";

export default function Movies() {
  const movieName = useParams();
  const dimensions={
    width:'100%',
    height:'800',
  };
  const [movieId,setMovieId]=useState(''); 
  useEffect(() => {
    console.log(movieName);
    movieTrailer(movieName.movies).then((response)=>{
      console.log(response, new URLSearchParams(new URL(response).search).get('v'));
      //setMovieId(new URLSearchParams(new URL(response).search).get('v'));
      setMovieId(response.split('=')[1]);
      
    }).catch();
  }, []);
  //https://www.youtube.com/watch?v=nAApTU2rzRQ
  //alert('Movies ');
  return <div>
    <YouTube videoId={movieId} opts={dimensions}/>
  </div>;
}
