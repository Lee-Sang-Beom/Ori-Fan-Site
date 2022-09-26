import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../css/main/Main.module.css";
import mainlogo from "../img/Ori-logo.png";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.header__mainlogo}>
          <img src={mainlogo} />
        </div>
        <div className={styles.header__github}>
          <FontAwesomeIcon icon={faGithub}/>
        </div>
      </div>
    </>
  );
}
