import s from "./game-buy.module.css";
import { Button } from "../button";
import { useDispatch, useSelector } from "react-redux";
import { setItemInCart, deleteItemFromCart } from "../../redux/cart/reducer";
export const GameBuy = ({ game }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = items.some((item) => item.id === game.id);

  const handleBuyClick = (e) => {
    e.stopPropagation();
    dispatch(setItemInCart(game));
  };
  const handleDeleteClick = (e) => {
    e.stopPropagation();
    dispatch(deleteItemFromCart(game.id));
  };
  return (
    <div className={s.gameBuy}>
      <span className={s.gameBuyPrice}>{game.price} ₽</span>
      <Button
        onClick={isItemInCart ? handleDeleteClick : handleBuyClick}
        type={isItemInCart ? "secondary" : "primary"}
      >
        {isItemInCart ? "Убрать из корзины" : "В корзину"}
      </Button>
    </div>
  );
};
