import React,{useState,createContext} from 'react';

export  const MovieContext=createContext();

export const MovieProvider=(props)=>{
    const[movies,setMovies]=useState([
        {
            name:"Harry Porter",
            rating:8,
            price:'Rs.100'

        },
        {
            name:"Avengers",
            rating:9,
            price:'Rs.150'

        },
        {
            name:"Spider Man",
            rating:8,
            price:'Rs.120'

        }
    ]);
    return(
        <MovieContext.Provider value={[movies,setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}



