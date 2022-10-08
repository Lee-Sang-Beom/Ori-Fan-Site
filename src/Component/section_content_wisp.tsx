import styles from "../css/wisp/Wisp.module.css";

export default function SectionContentWisp({ imgsrc, title, text }) {
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
