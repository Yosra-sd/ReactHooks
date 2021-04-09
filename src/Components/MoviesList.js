import React from 'react'
import MovieCard from './MovieCard'

const MoviesList = (props) => {
    return (

        <div>
            {
                props.MoviesArray.map(movie=><MovieCard movie={movie} />)
            }
        </div>
    )
}

export default MoviesList
