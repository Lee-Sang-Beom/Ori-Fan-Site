import styles from "../css/forest/Forest.module.css";
import ScrollOut from "scroll-out";
import forest_start from "../img/forest_start.jpg";
import tree from "../img/tree.jpg";
import wind from "../img/wind.jpg";
import mountain from "../img/mountain.jpg";
import top_icon from "../img/top_icon.jpg";
import forest_end from "../img/forest_end.jpg";
import { useEffect } from "react";
import Section_content from "../Component/section_content";

function Forest() {
  useEffect(() => {
    ScrollOut({});
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.site_wrap}>
        <div className={styles.forest_logo}>
          <img src={top_icon} />
        </div>

        {/* 1 */}
        <div className={styles.image1}></div>
        <section data-scroll className={styles.content}>
          <Section_content
            imgsrc={forest_start}
            title="시작"
            text="정령 버드나무에서 떨어진..."
          />
        </section>

        {/* 2 */}
        <div className={styles.image2}></div>
        <section data-scroll className={styles.content}>
          <Section_content
            imgsrc={tree}
            title="긴소나무"
            text="숲을 되살리기 위한 첫 번째 원소..."
          />
        </section>

        {/* 3 */}
        <div className={styles.image3}></div>
        <section data-scroll className={styles.content}>
          <Section_content
            imgsrc={wind}
            title="버려진 유적"
            text="숲을 되살리기 위한 두 번째 원소..."
          />
        </section>

        {/* 4 */}
        <div className={styles.image4}></div>
        <section data-scroll className={styles.content}>
          <Section_content
            imgsrc={mountain}
            title="호루산"
            text="숲을 되살리기 위한 세 번째 원소..."
          />
        </section>

        {/* 5 */}
        <div className={styles.image5}></div>
        <section data-scroll className={styles.content}>
          <Section_content
            imgsrc={forest_end}
            title="끝, 그리고 새로운 시작"
            text="숲을 정화한 후..."
          />
        </section>
      </div>
    </div>
  );
}

export default Forest;
