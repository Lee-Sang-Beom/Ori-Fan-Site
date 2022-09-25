import Ori from "../video/main.mp4";
import styles from "../css/background/MainBackground.module.css";

export default function BackgroundVideo() {
  return (
    <>
      <video autoPlay loop muted className={styles.background}>
        <source src={Ori} type="video/mp4" />
      </video>

      {/* <div class="video">
        <iframe
          src="https://www.youtube.com/embed/ClCW2A1355A"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div> */}
    </>
  );
}
