import s from "./header.module.css";
import { Link } from "react-router-dom";
import { clsx } from "clsx";
import { CartBlock } from "../cart-block";
export const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.headerWrapper}>
        <Link className={s.headerStoreTitle} to={"/"}>
          <div className={s.headerText}>Game Nexus</div>
        </Link>
      </div>
      <div className={clsx(s.headerWrapper, s.headerCartBtnWrapper)}>
        <CartBlock />
      </div>
    </div>
  );
};
