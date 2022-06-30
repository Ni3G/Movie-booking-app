import React from 'react';
import moviesData from '../Home/moviesData';

export default function CurrentMovies(){
    return (moviesData.map( movie => {
        return (
                <div className='movie-div'>
                    <img className='image' src={movie.poster_url} alt='image' />
                    <h3>{movie.title}</h3>
                    <h4>{movie.status}</h4>
                </div>
        )
    })
)}