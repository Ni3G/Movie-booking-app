import React from 'react';
import moviesData from './moviesData';
import './Home.css';

export default function Movies(){
    return ( moviesData.map( movie => {
        return (
                <div className='movie-div'>
                    <img className='image' src={movie.poster_url} alt='image' />
                    <h3>{movie.title}</h3>
                </div>
        )
    })
)}