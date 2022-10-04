import styles from "../css/main/Main.module.css";
import forest_logo from "../img/forest_logo.png";
import wisp_logo from "../img/wisp_logo.png";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <>
      <div className={styles.nav__wrap}>
        <div className={styles.nav}>
          <div className={styles.nav__left_forest}>
            <Link to="/ori_forest">
              <img src={forest_logo} />
            </Link>
          </div>
          <div className={styles.nav__right_wisp}>
            <Link to="/ori_wisp">
              <img src={wisp_logo} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
