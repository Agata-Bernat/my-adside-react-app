import React, {useState, useEffect} from 'react';

function Portfolio() {

    const [data, setData] = useState();
    //const access_key = "rvmwo2cCJTt8CoiNAWOc-j5OgX52gGpaq6A4E43KwtI";
    //const APIlink = `https://api.unsplash.com/photos/random?client_id=${access_key}`;
    const APIlink = "https://api.themoviedb.org/3/discover/movie?api_key=14df7912217b3871d3af70261869c1c6";
    
    useEffect(async () => {
        const response = await fetch(APIlink);
        const resData = await response.json();
        console.log(resData);
        setData(resData.results);
    }, []);

    return (
   
      <div className="movie-cards" >
      {data.map((movie) => (
        <div className="movie" key={movie.id}>
        <img
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        />
        <h3>Title: {movie.original_title}</h3>
        <p>Overview: {movie.overview}</p>
        <p>Popularity: {movie.popularity}</p>
        <p>Release Date: {movie.release_date}</p>
        <p>Video:{movie.video}</p>
        <p>Vote-Average: {movie.vote_average}</p>
        </div>
      
      ))}
      </div>
    )}


export default Portfolio;


