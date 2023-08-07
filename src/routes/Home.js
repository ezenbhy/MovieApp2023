import React, { Component } from 'react'
import axios from 'axios';
import Movie from '../components/Movie';
import '../styles/Home.css'

export class Home extends Component {
  state = {
    isLoading: true,
    movies: [],
  }
  getMovies = async () => {
    const {
      data: {
        data: {movies}
      }
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?genre=animation&sort_by=like_count')
    console.log('movies',movies);
    this.setState({isLoading:false,movies})//키:키값 이름이 동일하면
  }
    
  componentDidMount(){
    this.getMovies();
    // setTimeout(() => {
    //   this.setState({isLoading : false});
    // },6000);
  }
  render() {
    const {isLoading, movies} = this.state;//구조 분해 할당
    return (
      <section className='container'>
        {isLoading ? 
        <div className='loader'>
          <span className='loader_text'>'Loading...'</span>
        </div> 
        : 
        <div className='movies'>
          {movies.map( (movie,index) => (
            <Movie
            key={index}
            id={movie.id}
            year={movie.year}
            title={movie.title}
            summary={movie.summary}
            poster={movie.medium_cover_image}
            genres={movie.genres} />
          ))}
          {/* medium_cover_image, title,year,summary */}
        </div>
        }
      </section>
    )
  }
}

export default Home