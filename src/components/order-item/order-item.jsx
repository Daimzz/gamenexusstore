import s from "./order-item.module.css";
import { GameCover } from "../game-cover";
import { useDispatch } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { deleteItemFromCart } from "../../redux/cart/reducer";

export const OrderItem = ({ game }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deleteItemFromCart(game.id));
  };
  return (
    <div className={s.orderItem}>
      <div className={s.orderItemCover}>
        <GameCover image={game.image} />
      </div>
      <div className={s.orderItemInfo}>
        <p className={s.orderItemTitle}>{game.title}</p>
        <div className={s.orderItemBlock}>
          <div className={s.orderItemPrice}>{game.price} ₽</div>
          <AiOutlineCloseCircle
            size={25}
            className={s.orderItemClose}
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};
