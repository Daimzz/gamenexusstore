import { GameGenre } from "../game-genre";
import s from "./game-genres-list.module.css";
export const GameGenresList = ({ genres }) => {
  return (
    <div className={s.gameGenresList}>
      {genres.map((genre) => (
        <GameGenre key={genre} genre={genre} />
      ))}
    </div>
  );
};
