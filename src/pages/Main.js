import Header from "../Component/Header";
import Nav from "../Component/Nav";
import BackgroundVideo from "../Component/BackgroundVideo";
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
