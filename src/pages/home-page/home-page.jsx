import s from "./home-page.module.css";
import { GameItem } from "../../components/game-item";
import { useEffect, useState } from "react";
import { getServerData } from "../../service";
import { DataLoader } from "../../components/data-loader/loader";

export const HomePage = () => {
  const [games, setGames] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getServerData("http://localhost:4000/games")
      .then((data) => {
        setGames(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (error) {
    return <h1>Error in getting data ;(</h1>;
  }

  return (
    <div className={s.homePage}>
      {loading ? (
        <DataLoader />
      ) : games ? (
        games.map((game) => <GameItem gameInfo={game} key={game.id} />)
      ) : (
        "No data available"
      )}
    </div>
  );
};
