import React from "react"
import MovieCard from "./MovieCard";

const MovieList = ({movies}) => {
    if(movies.length === 0){
        return <div className="empty">
        <h2>No movies found.</h2>
        </div>
    }

    return (
        <>
        <div className="container">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>       
      
        </>
    )
}
export default MovieList;