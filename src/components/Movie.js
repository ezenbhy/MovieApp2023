import React from 'react'
import '../styles/Movie.css'

function Movie({genres,id,poster,summary,title,year}) {
  //console.log(props);
  //const {genres,id,poster,summary,title,year} = props;
  return (
    <div className='movie'>
      <img src={poster} alt={title} title={title} />
      <div className='movie_data'>
        <h3 className='movie_title'>{title}</h3>
        <h4 className='movie_year'>{year}</h4>
        <ul className='movie_genres'>
          {genres.map( (genre,index) => (
              <li className='movie_genre' key={index}>{genre}</li>
          ))
          }
        </ul>
        <p className='movie_summary'>{summary.slice(0,180)} ...</p>
      </div>
    </div>
  )
}

export default Movie