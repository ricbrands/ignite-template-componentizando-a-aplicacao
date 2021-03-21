import { useMovies } from "../hooks/useMovies";
import { MovieCard } from "./MovieCard";
import { Title } from "./Title";

export function Content() {
  const {movies, selectedGenre} = useMovies();
  return(
    <div className="container">
        <Title />

        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard 
                title={movie.Title} 
                poster={movie.Poster} 
                runtime={movie.Runtime} 
                rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
  );
}