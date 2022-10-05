import styles from "../css/forest/Forest.module.css";
import ScrollOut from "scroll-out";
import { useEffect } from "react";
import Section_content from "../Component/section_content";

// img
import forestStart from "../img/forestStart.jpg";
import deadForest from "../img/deadForest.jpg";
import adventureStart from "../img/adventureStart.jpg";
import meetShine from "../img/meetShine.jpg";
import gumo from "../img/gumo.jpg";
import tree from "../img/tree.jpg";
import smoke from "../img/smoke.jpg";
import wind from "../img/wind.jpg";
import woe from "../img/woe.jpg";
import recovery from "../img/recovery.jpg";
import mountain from "../img/mountain.jpg";
import topIcon from "../img/topIcon.jpg";
import forestEnd from "../img/forestEnd.jpg";


function Forest() {
  useEffect(() => {
    ScrollOut({});
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.site_wrap}>
        <div className={styles.forest_logo}>
          <img src={topIcon} />
        </div>

        {/* 1 */}
        <div className={styles.image1}></div>
        <section data-scroll className={styles.content}>
          <Section_content
            imgsrc={forestStart}
            title="시작"
            text="니벨 숲의 어느 폭풍우 치는 밤, 정령 버드나무로부터 잎사귀가 떨어집니다. 
            근처에 있던 나루는 이 모습을 보고 잎사귀가 날아간 쪽으로 향하게 되고, 잎사귀로부터 태어난 정령을 발견합니다. 
            나루는 정령에게 Ori라는 이름을 붙여주고, 이 만남을 시작으로 둘은 함께 생활하기 시작합니다."
          />
        </section>

        {/* 2 */}
        <div className={styles.image2}></div>
        <section data-scroll className={styles.content}>
          <Section_content
            imgsrc={deadForest}
            title="생명을 잃은 숲"
            text="Ori를 찾기위해 빛을 발산하던 정령 버드나무는 거대한 생명체에 의해 숲을 보호하는 힘의 원천을 빼앗깁니다.
            그렇게 정령 버드나무에 의해 평화를 유지하던 니벨(Nibel) 숲은, 생명의 균형을 잃어 황폐화되기 시작합니다."
          />
        </section>

        {/* 3 */}
        <div className={styles.image3}></div>
        <section data-scroll className={styles.content}>
          <Section_content
            imgsrc={adventureStart}
            title="마지막 빛"
            text="나루가 쓰러진 후, 숲이 황폐화된 원인을 찾기 위해 길을 떠난 Ori도 결국 생명의 힘이 다해 쓰러집니다. 
            하지만, 정령 버드나무는 마지막 남은 힘을 쏟아 Ori에게 생명을 불어넣습니다."
          />
        </section>

        {/* 4 */}
        <div className={styles.image4}></div>
        <section data-scroll className={styles.content}>
          <Section_content
            imgsrc={meetShine}
            title="잃어버린 빛"
            text="정령 버드나무의 마지막 빛으로 깨어난 Ori는 잃어버렸던 힘의 원천 '세인'을 만납니다. 
            '세인'을 통해 Ori는 기능을 멈춘 니벨(Nibel)숲의 원소 3개를 다시 가동시켜 숲을 되살릴 수 있음을 알게 됩니다.
            Ori는 생명을 잃은 니벨(Nibel) 숲을 되살리기 위해 위험한 모험을 시작합니다."
          />
        </section>

        {/* 5 */}
        <div className={styles.image5}></div>
        <section data-scroll className={styles.content}>
          <Section_content
            imgsrc={gumo}
            title="긴소나무의 열쇠, 수맥"
            text="숲을 되살리기 위한 첫 번째 원소인 물의 원소는 긴소나무에 존재합니다. 
            하지만, Ori를 경계하던 구모 일족의 구모가 긴소나무의 입구를 열 수 있는 수맥을 가지고 도망가게되고, Ori는 그를 쫓기 시작합니다.
            이후, 쫓는 과정에서 발생한 어떤 사건 때문에 구모는 Ori에 대한 경계를 풀고 긴소나무의 열쇠인 수맥을 돌려주게 됩니다."
          />
        </section>

        {/* 6 */}
        <div className={styles.image6}></div>
        <section data-scroll className={styles.content}>
          <Section_content
            imgsrc={tree}
            title="물의 원소"
            text="구모로부터 돌려받은 수맥으로, Ori는 긴소나무로 들어가 
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
            text="숲을 되살리기 위한 두 번째 원소인 바람의 원소는 구모의 고향, 버려진 유적에 존재합니다. 
            하지만 유적의 문을 열기 위해서는, 안개숲에 있는 구몬의 문장을 얻어야합니다. 
            Ori는 연무로 뒤덮인 안개숲에서 우연히 아추의 횃불을 발견하게 됩니다."
          />
        </section>

        {/* 8 */}
        <div className={styles.image8}></div>
        <section data-scroll className={styles.content}>
          <Section_content
            imgsrc={wind}
            title="바람의 원소"
            text="버려진 유적에 들어온 Ori는 빛의 그릇을 들고 유적의 중심으로 이동하기 시작하고,
             구모 또한 Ori의 뒤를 따라 버려진 유적 안으로 이동하게 됩니다.
             Ori가 빛의 그릇을 유적의 중심에 놓으면서, 작동을 멈췄던 유적은 다시 가동되고, 바람의 원소는 힘을 되찾게 됩니다.
             하지만 Ori와 세인의 이야기를 듣던 구모는 Ori를 위하여 무언가를 행동으로 옮기기로 결심하게 되고, 그 여파로 유적은 갑자기 붕괴되기 시작합니다."
          />
        </section>

        {/* 9 */}
        <div className={styles.image9}></div>
        <section data-scroll className={styles.content}>
          <Section_content
            imgsrc={woe}
            title="태양석, 비애의 산길"
            text="숲을 되살리기 위한 마지막 원소인 불의 원소는 용암으로 뒤덮인 호루산에 존재합니다. 
            호루산의 입구를 열기 위해서는, 비애의 산길 꼭대기에 있는 태양석이 필요합니다. 
            Ori는 자신을 향한 많은 위협에도 불구하고, 길을 뚫어내 마침내 태양석이 있는 곳까지 올라가게 됩니다."
          />
        </section>

        {/* 10 */}
        <div className={styles.image10}></div>
        <section data-scroll className={styles.content}>
          <Section_content
            imgsrc={recovery}
            title="빛의 그릇과 부활"
            text="니벨(Nibel) 숲이 황폐화되고, 쓰러진 나루가 있는 동굴로 이동한 구모는, 유적에서 들고 온 빛의 그릇의 힘을 사용하기 시작합니다.
            빛의 그릇은 가지고 있던 모든 힘을 내뿜어 나루를 다시 부활시키고 사라지게 됩니다. 구모는 다시 생명을 얻어 깨어난 나루를 Ori가 향하는 마지막 장소인 호루산으로 안내합니다."
          />
        </section>

      </div>
    </div>
  );
}

export default Forest;
