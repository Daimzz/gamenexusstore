import "./button.css";
import { clsx } from "clsx";
export const Button = ({ onClick, type, children, size = "s" }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "btn",
        { "btn--secondary": type === "secondary" },
        { "btn--primary": type === "primary" },
        { "btn--small": size === "s" },
        { "btn--medium": size === "m" },
      )}
    >
      {children}
    </button>
  );
};
