import React,{useState} from 'react'
import Movie from './Movie'


const MovieList = () => {
    const [movie, setmovie] = useState([
        {
            name : 'Harry Porter',
            price : '10$',
            id : 121
        },
        {
            name : 'Bharat',
            price : '12$',
            id : 122
        },
        {
            name : 'King',
            price : '14$',
            id : 123
        }
    ])
    return (
        <div>
            
            {movie.map((movie) => (
                
                <Movie name={movie.name} price={movie.price} key={movie.id} />
            ))}
        </div>
    )
}

export default MovieList
