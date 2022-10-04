import styles from "../css/forest/Forest.module.css";
import ScrollOut from "scroll-out";
import forest_start from "../img/forest_start.jpg";
import dead_forest from "../img/dead_forest.jpg";
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
            text="폭풍우 치는 어느 밤, 정령 버드나무로부터 잎사귀가 떨어집니다. 
            근처에 있던 나루는 이 모습을 보고 잎사귀가 날아간 방향으로 이동하였고, 잎사귀로부터 태어난 정령을 발견합니다. 
            나루는 정령에게 Ori라는 이름을 붙여주었고, 이 둘은 그로부터 함께 지내기 시작합니다."
          />
        </section>

        {/* 2 */}
        <div className={styles.image2}></div>
        <section data-scroll className={styles.content}>
          <Section_content
            imgsrc={dead_forest}
            title="생명을 잃은 숲"
            text="생명을 잃어가기..."
          />
        </section>

        {/* 3 */}
        <div className={styles.image3}></div>
        <section data-scroll className={styles.content}>
          <Section_content
            imgsrc={tree}
            title="긴소나무"
            text="숲을 되살리기 위한 첫 번째 원소..."
          />
        </section>

        {/* 4 */}
        <div className={styles.image4}></div>
        <section data-scroll className={styles.content}>
          <Section_content
            imgsrc={wind}
            title="버려진 유적"
            text="숲을 되살리기 위한 두 번째 원소..."
          />
        </section>

        {/* 5 */}
        <div className={styles.image5}></div>
        <section data-scroll className={styles.content}>
          <Section_content
            imgsrc={mountain}
            title="호루산"
            text="숲을 되살리기 위한 세 번째 원소..."
          />
        </section>

        {/* 6 */}
        <div className={styles.image6}></div>
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
