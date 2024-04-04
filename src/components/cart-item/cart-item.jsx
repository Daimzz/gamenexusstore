import s from "./cart-item.module.css";
export const CartItem = ({ title, price, id }) => {
  return (
    <div className={s.cartItem}>
      <span>{title}</span>
      <div className={s.cartItemPrice}>{price} ₽</div>
    </div>
  );
};
