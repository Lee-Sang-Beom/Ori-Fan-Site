import styles from "../css/wisp/Wisp.module.css";
import ScrollOut from "scroll-out";
import { useEffect } from "react";
import SectionContent from "../Component/section_content_wisp";

// video
import start from "../video/wisp_src/start.mp4";

// img
import topIcon from "../img/wisp_src/topIcon.jpg";

import wispStart from "../img/wisp_src/start.jpg";
import abnormalWing from "../img/wisp_src/abnormalWings.jpg";
import kuroFeather from "../img/wisp_src/kuroFeather.jpg";


function Forest() {
  useEffect(() => {
    ScrollOut({});
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.site_wrap}>
        <div className={styles.wisp_logo}>
          <img src={topIcon} alt="top-icon"/>
        </div>

        {/* 1 */}
        <video autoPlay loop muted className={styles.background}>
          <source src={start} type="video/mp4" />
        </video>
        <section data-scroll className={styles.content}>
          <SectionContent
            imgsrc={wispStart}
            title="새로운 생명"
            text="과거, 쿠로가 지켜냈던 알이 어느날 깨지기 시작하며 니벨(Nibel) 숲에는 새로운 생명이 찾아옵니다. 
            그렇게 태어난 아이는 '쿠'라는 이름을 가지게 되었습니다."
          />
        </section>

        {/* 2 */}
        <div className={styles.image1}></div>
        <section data-scroll className={styles.content}>
          <SectionContent
            imgsrc={abnormalWing}
            title="상실"
            text="새의 본능에 따라, 쿠는 성장하면서 하늘을 날아다니는 것에 대한 꿈을 꾸게 됩니다. 하지만, 선천적으로 정상적이지 못한 한 쪽 날개 때문에 쿠는 상실감에 빠지게 됩니다."
          />
        </section>

        {/* 3 */}
        <div className={styles.image2}></div>
        <section data-scroll className={styles.content}>
          <SectionContent
            imgsrc={kuroFeather}
            title="어머니의 선물"
            text="Ori는 쿠로의 깃털을 이용하면, 쿠가 날 수 있을 것이라 생각하여 구모를 찾아갑니다. 
                구모는 Ori의 의중을 이해하고, 쿠의 비정상적인 날개에 쿠로의 깃털을 묶어주게 됩니다."
          />
        </section>
       
      </div>
    </div>
  );
}

export default Forest;
