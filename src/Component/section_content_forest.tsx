import styles from "../css/forest/Forest.module.css";

export default function SectionContentForest({ imgsrc, title, text }) {
  return (
    <>
      <div className={styles.box}>
        <div className={styles.left_box}>
          <img src={imgsrc} alt="img" />
        </div>
        <div className={styles.right_box}>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
