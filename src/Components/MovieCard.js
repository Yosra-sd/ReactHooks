import React from 'react'
import './movieCard.css'

const MovieCard = (props) => {
    console.log(props)
    return (
        <div className="yosra">
            <p>{props.movie.id}</p>
            <p>{props.movie.nom}</p>
            <img src={props.movie.imgSrc}/>
        </div>
    )
}

export default MovieCard
