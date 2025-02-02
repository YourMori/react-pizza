import React from "react";

import styles from "./NotFound.module.scss";

export const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Ничего не найдено
      </h1>
      <p className={styles.descriptions}>
        К сожалению данная страница отстутствует в нашем интернет-магазине
      </p>
    </div>
  );
};

export default NotFoundBlock;
