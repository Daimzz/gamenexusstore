import s from "./game-genre.module.css";
export const GameGenre = ({ genre }) => {
  return <span className={s.gameGenre}>{genre}</span>;
};
