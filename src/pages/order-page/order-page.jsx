import { useSelector } from "react-redux";
import s from "./order-page.module.css";
import { calcTotalPrice, generateTextCount } from "../../components/utils";
import { OrderItem } from "../../components/order-item";

export const OrderPage = () => {
  const orderItems = useSelector((state) => state.cart.itemsInCart);
  if (!orderItems.length > 0) {
    return <h1>Вы ничего не заказали</h1>;
  }

  return (
    <div className={""}>
      <div className={""}>
        {orderItems.map((game) => (
          <OrderItem key={game.id} game={game} />
        ))}
      </div>
      <div className={""}>
        <div className={s.orderPageTotalPrice}>
          <h3 className={""}>
            {generateTextCount(
              orderItems,
              calcTotalPrice,
              "товар",
              "товара",
              "товаров",
            )}
          </h3>
        </div>
      </div>
    </div>
  );
};
