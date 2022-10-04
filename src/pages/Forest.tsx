import styles from "../css/forest/Forest.module.css";
import ScrollOut from "scroll-out";
import { useEffect } from "react";
import Section_content from "../Component/section_content";

// img
import forest_start from "../img/forest_start.jpg";
import dead_forest from "../img/dead_forest.jpg";
import adventure_start from "../img/adventure_start.jpg";
import gumo from "../img/gumo.jpg";
import tree from "../img/tree.jpg";
import smoke from "../img/smoke.jpg";
import wind from "../img/wind.jpg";
import woe from "../img/woe.jpg";
import mountain from "../img/mountain.jpg";
import top_icon from "../img/top_icon.jpg";
import forest_end from "../img/forest_end.jpg";
import meet_shine from "../img/meet_shine.jpg";


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
            text="니벨 숲의 어느 폭풍우 치는 밤, 정령 버드나무로부터 잎사귀가 떨어집니다. 
            근처에 있던 '나루'는 이 모습을 보고 잎사귀가 날아간 쪽으로 향하게 되고, 잎사귀로부터 태어난 정령을 발견합니다. 
            '나루'는 정령에게 'Ori'라는 이름을 붙여주고, 이 만남을 시작으로 둘은 함께 생활하기 시작합니다."
          />
        </section>

        {/* 2 */}
        <div className={styles.image2}></div>
        <section data-scroll className={styles.content}>
          <Section_content
            imgsrc={dead_forest}
            title="생명을 잃은 숲"
            text="'Ori'를 찾기위해 빛을 발산하던 정령 버드나무는 거대한 생명체에 의해 숲을 보호하는 힘의 원천을 빼앗깁니다.
            그렇게 정령 버드나무에 의해 평화를 유지하던 니벨(Nibel) 숲은, 생명의 균형을 잃어 황폐화되기 시작합니다."
          />
        </section>

        {/* 3 */}
        <div className={styles.image3}></div>
        <section data-scroll className={styles.content}>
          <Section_content
            imgsrc={adventure_start}
            title="마지막 빛"
            text="'나루'가 쓰러진 후, 숲이 황폐화된 원인을 찾기 위해 길을 떠난 'Ori'도 결국 생명의 힘이 다해 쓰러집니다. 
            하지만, 정령 버드나무는 마지막 남은 힘을 쏟아 'Ori'에게 생명을 불어넣습니다."
          />
        </section>

        {/* 4 */}
        <div className={styles.image4}></div>
        <section data-scroll className={styles.content}>
          <Section_content
            imgsrc={meet_shine}
            title="잃어버린 빛"
            text="정령 버드나무의 마지막 빛으로 깨어난 'Ori'는 잃어버렸던 힘의 원천 '세인'을 만납니다. 
            '세인'을 통해 'Ori'는 기능을 멈춘 니벨(Nibel)숲의 원소 3개를 다시 가동시켜 숲을 되살릴 수 있음을 알게 됩니다.
            'Ori'는 생명을 잃은 니벨(Nibel) 숲을 되살리기 위해 위험한 모험을 시작합니다."
          />
        </section>

        {/* 5 */}
        <div className={styles.image5}></div>
        <section data-scroll className={styles.content}>
          <Section_content
            imgsrc={gumo}
            title="긴소나무의 열쇠, 수맥"
            text="숲을 되살리기 위한 첫 번째 원소인 물의 원소는 긴소나무에 존재합니다. 
            하지만, 'Ori'의 행동을 경계하던 구모 일족의 '구모'가 긴소나무의 입구를 열 수 있는 수맥을 가지고 도망가게되고, 'Ori'는 그를 쫓아가기 시작합니다.
            이후, 'Ori'가 '구모'를 쫓는 과정에서 발생한 어떤 사건 때문에 '구모'는 'Ori'에 대한 경계를 풀고 긴소나무의 열쇠인 수맥을 돌려주게 됩니다."
          />
        </section>

        {/* 6 */}
        <div className={styles.image6}></div>
        <section data-scroll className={styles.content}>
          <Section_content
            imgsrc={tree}
            title="물의 원소"
            text="'구모'로부터 돌려받은 수맥으로, 'Ori'는 긴소나무로 들어가 
            중심부까지 이동해 물의 원소를 오염시킨 '무언가'를 제거해 물의 원소를 재가동하게 됩니다.
            하지만, 정화된 물의 원소가 갑자기 가동하며 긴소나무 내부에 예상치 못한 일을 발생시키는데..."
          />
        </section>

        {/* 7 */}
        <div className={styles.image7}></div>
        <section data-scroll className={styles.content}>
          <Section_content
            imgsrc={smoke}
            title="구모의 문장, 안개숲"
            text="숲을 되살리기 위한 두 번째 원소인 바람의 원소는 '구모'의 고향, 버려진 유적에 존재합니다."
          />
        </section>

        {/* 8 */}
        <div className={styles.image8}></div>
        <section data-scroll className={styles.content}>
          <Section_content
            imgsrc={wind}
            title="바람의 원소"
            text="숲을 되살리기 위한 두 번째 원소인 바람의 원소는 '구모'의 고향, 버려진 유적에 존재합니다."
          />
        </section>

        {/* 9 */}
        <div className={styles.image9}></div>
        <section data-scroll className={styles.content}>
          <Section_content
            imgsrc={woe}
            title="태양석, 비애의 산길"
            text=""
          />
        </section>


       
      </div>
    </div>
  );
}

export default Forest;
