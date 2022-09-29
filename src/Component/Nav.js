import styles from "../css/main/Main.module.css";
import forestlogo from "../img/forest_logo.png";
import wisplogo from "../img/wisp_logo.png";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
export default function Nav() {
  return (
    <>
      <div className={styles.nav__wrap}>
        <div className={styles.nav}>
          <div className={styles.nav__left_forest}>
            <img src={forestlogo} />
          </div>
          <div className={styles.nav__right_wisp}>
            <img src={wisplogo} />
          </div>
        </div>
      </div>
    </>
  );
}
