import React ,{useContext}from 'react';
import {MovieContext} from "./MovieContext";

function Movies(props) {
    const [movies,setMovies]=useContext(MovieContext)
    return (
        <div>
            {
                movies.map(movie=>(
                    <>
                        <h2>{movie.name}</h2>
                        <p>Price: {movie.price}</p>
                        <p>Rating: {movie.rating}</p>
                    </>
                ))
            }
        </div>
    );
}

export default Movies;