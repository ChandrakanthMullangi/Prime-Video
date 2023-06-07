// Write your code here

import './index.css'

import MovieSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'ACTION',
  )

  const comedyMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'COMEDY',
  )

  return (
    <div className="prime-video">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-video-image"
      />
      <div className="movies-slider-container">
        <h1 className="movies-slider-heading"> Action Movies </h1>
        <MovieSlider moviesList={actionMoviesList} />
      </div>
      <div className="movies-slider-container">
        <h1 className="movies-slider-heading"> Comedy Movies </h1>
        <MovieSlider moviesList={comedyMoviesList} />
      </div>
    </div>
  )
}

export default PrimeVideo
