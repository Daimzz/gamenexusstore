import s from "./cart-block.module.css";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { CartMenu } from "../cart-menu";
import { calcTotalPrice } from "../utils";
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
export const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  const cartButtonRef = useRef(null);
  const cartMenuRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        cartMenuRef.current &&
        !cartMenuRef.current.contains(event.target) &&
        cartButtonRef.current &&
        !cartButtonRef.current.contains(event.target)
      ) {
        setIsCartMenuVisible(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleOrderClick = useCallback(() => {
    setIsCartMenuVisible(false);
    navigate("/order");
  }, [navigate]);

  return (
    <div ref={cartMenuRef} className={s.cartBlock}>
      <div
        ref={cartButtonRef}
        onClick={() => setIsCartMenuVisible((prev) => !prev)}
        className={s.cartIconBlock}
      >
        <FaCartShopping size={22} />
        {items.length > 0 ? (
          <span className={s.itemsInCart}>{items.length}</span>
        ) : null}
      </div>

      {totalPrice ? <span className={s.cartPrice}>{totalPrice} ₽</span> : null}
      {isCartMenuVisible && (
        <CartMenu
          setIsCartMenuVisible={setIsCartMenuVisible}
          onClick={handleOrderClick}
          items={items}
          totalPrice={totalPrice}
        />
      )}
    </div>
  );
};
