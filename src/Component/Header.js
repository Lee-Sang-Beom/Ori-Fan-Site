import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../css/main/Main.module.css";
import mainlogo from "../img/Ori-logo.png";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.header__mainlogo}>
          {/* Link to 사용 : 내부 페이지 */}
          <img src={mainlogo} />
        </div>
        <div className={styles.header__github}>
          {/* a태그 사용 : 외부 페이지 */}
          <a href="https://github.com/Lee-Sang-Beom/Ori-Fan-Site">
            <FontAwesomeIcon icon={faGithub} style={{ color: "white" }} />
          </a>
        </div>
      </div>
    </>
  );
}
