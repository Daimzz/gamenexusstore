import { useNavigate } from "react-router-dom";
import { GameCover } from "../game-cover";
import { GameBuy } from "../game-buy";
import s from "./game-item.module.css";
import { useDispatch } from "react-redux";
import { setCurrentGame } from "../../redux/games/reducer";
import { GameGenresList } from "../game-genres-list";
export const GameItem = ({ gameInfo }) => {
  const { image, title, genres } = gameInfo;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCurrentGame(gameInfo));
    navigate(`/app/${gameInfo.link}`);
  };

  return (
    <div className={s.gameItem} onClick={handleClick}>
      <GameCover image={image} />
      <div className={s.gameItemDetails}>
        <span className={s.gameItemTitle}>{title}</span>
        <GameGenresList genres={genres} />
        <div className={s.gameItemBuy}>
          <GameBuy game={gameInfo} />
        </div>
      </div>
    </div>
  );
};
