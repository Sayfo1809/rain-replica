import React from "react";

import styles from "../../css/footer.module.css";

const Footer = () => {
  return (
    <footer className={`${styles["footer"]} footer`}>
      <div className="container">
        <h1 className="heading-1">rain</h1>
        <div className={styles["footer__content"]}>
          <ul className={styles["footer__items"]}>
            <li className={styles["footer__item"]}>
              <a href="#" className={styles["footer__link"]}>
                terms and conditions
              </a>
            </li>
            <li className={styles["footer__item"]}>
              <a href="#" className={styles["footer__link"]}>
                privacy policy
              </a>
            </li>
            <li className={styles["footer__item"]}>
              <a href="#" className={styles["footer__link"]}>
                &copy; 2021 rain
              </a>
            </li>
          </ul>

          <p className={styles["footer__text-version"]}>3.8.7</p>
          <p className={styles["footer__copyright"]}>
            This site is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
