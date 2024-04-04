import * as React from "react";
import Loader from "react-ts-loaders";
import s from "./loader.module.css";

export const DataLoader = () => {
  return (
    <div className={s.dataLoader}>
      <Loader type="roller" color="rgba(255,255,255,0.7)" size={245} />
    </div>
  );
};
