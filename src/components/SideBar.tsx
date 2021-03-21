import { useMovies } from "../hooks/useMovies";
import { Button } from "./Button";

export function SideBar() {
  const {genres, handleClickButton, selectedGenre} = useMovies();

  return(
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              id={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenre.id === genre.id}
            />
          ))}
        </div>

      </nav>
  );
}