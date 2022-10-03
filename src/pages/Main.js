import Nav from "../Component/Nav";
import BackgroundVideo from "../Component/backgroundVideo";
import styles from "../css/main/Main.module.css";

function Main() {
  return (
    <div className={styles.container}>
      <BackgroundVideo />
      <Nav />
    </div>
  );
}

export default Main;
