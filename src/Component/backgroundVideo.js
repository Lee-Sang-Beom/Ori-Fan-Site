import Ori from "../video/main.mp4";
import styles from "../css/main/Main.module.css";

export default function BackgroundVideo() {
  return (
    <>
      <video autoPlay loop muted className={styles.background}>
        <source src={Ori} type="video/mp4" />
      </video>
    </>
  );
}
