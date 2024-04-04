import s from "./cart-menu.module.css";
import { useDispatch } from "react-redux";
import { Button } from "../button";
import { deleteAll } from "../../redux/cart/reducer";
import { CartItem } from "../cart-item";
export const CartMenu = ({
  items,
  totalPrice,
  onClick,
  setIsCartMenuVisible,
}) => {
  const dispatch = useDispatch();
  const deleteAllFromCart = () => {
    setIsCartMenuVisible(false);
    dispatch(deleteAll());
  };

  return (
    <div className={s.cartMenu}>
      <div>
        {items &&
          items.map((item) => (
            <CartItem
              key={item.id}
              title={item.title}
              price={item.price}
              id={item.id}
            />
          ))}
      </div>
      {items.length > 0 ? (
        <div className={s.cartMenuArrange}>
          <span>Итого: </span>
          <span>{totalPrice} ₽</span>
        </div>
      ) : (
        <>
          <div className={s.cartEmpty}>Ваша корзина пуста</div>
          <div className={s.cartEmptyBottom}>Тут мог быть ваш товар :(</div>
        </>
      )}
      {items.length > 0 ? (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button type={"primary"} size={"m"} onClick={onClick}>
            Оформить заказ
          </Button>
          <Button type={"secondary"} size={"m"} onClick={deleteAllFromCart}>
            Очистить корзину
          </Button>
        </div>
      ) : null}
    </div>
  );
};
