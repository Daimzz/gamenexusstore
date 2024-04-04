import React from "react";
import { useParams } from "react-router-dom";
import s from "./game-page.module.css";
import { useSelector } from "react-redux";
import { GameCover } from "../../components/game-cover";
import { GameGenresList } from "../../components/game-genres-list";
import { GameBuy } from "../../components/game-buy";

export const GamePage = () => {
  const params = useParams();
  const currentGame = useSelector((state) => state.games.currentGame);

  if (!currentGame) {
    return null;
  }

  return (
    <div className={s.gamePage}>
      <h1 className={s.gamePageTitle}>{currentGame.title}</h1>
      <div className={s.gamePageContent}>
        <div className={s.gamePageLeft}>
          <iframe
            className={s.gamePageVideo}
            width={"100%"}
            height={"400px"}
            src={currentGame.video}
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        </div>
        <div className={s.gamePageRight}>
          <GameCover image={currentGame.image} />
          <p className={s.gamePageRightDescription}>
            {currentGame.description}
          </p>
          <p className={"secondary-text"}>Популярные метки этого продукта:</p>
          <GameGenresList genres={currentGame.genres} />
          <div className={s.gamePageBuyGame}>
            <GameBuy game={currentGame} />
          </div>
        </div>
      </div>
    </div>
  );
};
