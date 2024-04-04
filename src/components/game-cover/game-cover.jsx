import s from "./game-cover.module.css";

export const GameCover = ({ image = "" }) => {
  return <img src={image} className={s.gameCover}></img>;
};
