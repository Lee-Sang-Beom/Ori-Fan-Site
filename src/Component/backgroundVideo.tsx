import styles from "../css/main/Main.module.css";
import mainbackgroundVideo from "../video/main.mp4";

export default function BackgroundVideo() {
  return (
    <>
      <video autoPlay loop muted className={styles.background}>
        <source src={mainbackgroundVideo} type="video/mp4" />
      </video>
    </>
  );
}
