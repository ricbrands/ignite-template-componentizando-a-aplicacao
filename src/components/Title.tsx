import { useMovies } from "../hooks/useMovies";

export function Title(){
  const {selectedGenre} = useMovies();

  return(
    <header>
      <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
    </header>
  );
}