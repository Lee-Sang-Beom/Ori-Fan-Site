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
            <Link to="/ori_forest">
              <img src={forestlogo} />
            </Link>
          </div>
          <div className={styles.nav__right_wisp}>
            <Link to="/ori_wisp">
              <img src={wisplogo} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
