import { moviesCard } from '../htmlChunks/moviesCards'

export const buildMovieCards = (movies: Array<Object>) =>
    document.getElementById("cardContainer").innerHTML = moviesCard(movies)