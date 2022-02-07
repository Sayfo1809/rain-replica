import React from "react";

import styles from "../../css/navbar.module.css";

const Navbar = () => {
  return (
    <nav className={`${styles["navbar"]} navbar`}>
      <h1 className="heading-1">rain</h1>

      <div className={styles["navbar__links"]}>
        <ul className={styles["navbar__items"]}>
          <li className={styles["navbar__item"]}>
            <a href="#" className={styles["navbar__link"]}>
              activate SIM
            </a>
          </li>
          <li className={styles["navbar__item"]}>
            <a href="#" className={styles["navbar__link"]}>
              support
            </a>
          </li>
        </ul>

        <ul className={styles["navbar__user"]}>
          <li className={styles["navbar__user--item"]}>
            <a href="#" className={styles["navbar__user--link"]}>
              sign in
            </a>
          </li>
          <li className={styles["navbar__user--item"]}>
            <a href="#" className={styles["navbar__user--link"]}>
              Shop
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
