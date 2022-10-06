import styles from "../css/forest/Forest.module.css";
import ScrollOut from "scroll-out";
import { useEffect } from "react";
import Section_content from "../Component/section_content";

// img
import topIcon from "../img/forest_src/topIcon.jpg";

import forestStart from "../img/forest_src/forestStart.jpg";
import peaceful from "../img/forest_src/peaceful.jpg";
import deadForest from "../img/forest_src/deadForest.jpg";
import adventureStart from "../img/forest_src/adventureStart.jpg";
import meetShine from "../img/forest_src/meetShine.jpg";
import gumo from "../img/forest_src/gumo.jpg";
import tree from "../img/forest_src/tree.jpg";
import smoke from "../img/forest_src/smoke.jpg";
import wind from "../img/forest_src/wind.jpg";
import woe from "../img/forest_src/woe.jpg";
import recovery from "../img/forest_src/recovery.jpg";
import mountain from "../img/forest_src/mountain.jpg";
import kuro from "../img/forest_src/kuro.jpg";
import kuro2 from "../img/forest_src/kuro2.jpg";
import forestEnd from "../img/forest_src/forestEnd.jpg";


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
            title="만남"
            text="니벨(Nibel) 숲의 어느 폭풍우 치는 밤, 정령 버드나무로부터 잎사귀가 떨어집니다. 
            근처에 있던 나루는 이 모습을 보고 잎사귀가 날아간 쪽으로 향하게 되고, 잎사귀로부터 태어난 정령을 발견합니다. 
            '나루'는 정령에게 'Ori'라는 이름을 붙여줍니다."
          />
        </section>

        {/* 2 */}
        <div className={styles.image2}></div>
        <section data-scroll className={styles.content}>
          <Section_content
            imgsrc={peaceful}
            title="평화"
            text="폭풍우 치는 밤의 첫 만남을 시작으로, 이 둘은 함께 생활하기 시작합니다. 
            하지만 정령 나무가 Ori를 찾기 시작하면서, 이 평화에는 금이가기 시작합니다."
          />
        </section>

        {/* 3 */}
        <div className={styles.image3}></div>
        <section data-scroll className={styles.content}>
          <Section_content
            imgsrc={deadForest}
            title="생명을 잃은 숲"
            text="Ori를 찾기위해 빛을 발산하던 정령 버드나무는 거대한 생명체에 의해 숲을 보호하는 힘의 원천을 빼앗깁니다.
            그렇게 정령 버드나무에 의해 평화를 유지하던 니벨(Nibel) 숲은, 생명의 균형을 잃어 황폐화되기 시작합니다."
          />
        </section>

        {/* 4 */}
        <div className={styles.image4}></div>
        <section data-scroll className={styles.content}>
          <Section_content
            imgsrc={adventureStart}
            title="마지막 힘"
            text="나루가 쓰러진 후, 숲이 황폐화된 원인을 찾기 위해 길을 떠난 Ori도 결국 생명의 힘이 다해 쓰러집니다. 
            하지만, 정령 버드나무는 마지막 남은 힘을 쏟아 Ori에게 생명을 불어넣습니다."
          />
        </section>

        {/* 5 */}
        <div className={styles.image5}></div>
        <section data-scroll className={styles.content}>
          <Section_content
            imgsrc={meetShine}
            title="잃어버린 빛"
            text="정령 버드나무의 마지막 빛으로 깨어난 Ori는 정령 버드나무가 잃어버린 힘의 원천 '세인'을 만납니다. 
            세인을 통해 Ori는 기능을 멈춘 니벨(Nibel)숲의 원소 3개를 다시 가동시켜 숲을 되살릴 수 있음을 알게 됩니다."
          />
        </section>

        {/* 6 */}
        <div className={styles.image6}></div>
        <section data-scroll className={styles.content}>
          <Section_content
            imgsrc={gumo}
            title="긴소나무의 수맥"
            text="숲을 되살리기 위한 첫 번째 원소인 물의 원소는 긴소나무에 존재합니다. 
            하지만, Ori를 경계하던 구모 일족의 '구모'는 긴소나무의 입구를 열 수 있는 수맥을 갖고 도망가기 시작합니다. 
            이후 구모는 추격 중 발생한 '어떤 일' 때문에, Ori에 대한 경계를 풀고 긴소나무의 열쇠인 수맥을 돌려주게 됩니다."
          />
        </section>

        {/* 7 */}
        <div className={styles.image7}></div>
        <section data-scroll className={styles.content}>
          <Section_content
            imgsrc={tree}
            title="물의 원소"
            text="구모로부터 돌려받은 수맥으로, Ori는 긴소나무로 들어가 
            중심부까지 이동해 물의 원소를 오염시킨 '무언가'를 제거해 물의 원소를 재가동하게 됩니다.
            하지만, 정화된 물의 원소가 갑자기 가동하며 긴소나무 내부에 예상치 못한 일을 발생시키는데..."
          />
        </section>

        {/* 8 */}
        <div className={styles.image8}></div>
        <section data-scroll className={styles.content}>
          <Section_content
            imgsrc={smoke}
            title="구모의 문장, 안개숲"
            text="숲을 되살리기 위한 두 번째 원소인 바람의 원소는 구모의 고향, 버려진 유적에 존재합니다. 
            하지만 유적의 문을 열기 위해서는, 안개숲에 있는 구몬의 문장을 얻어야 합니다. 
            Ori는 연무로 뒤덮인 안개숲에서 우연히 아추의 횃불을 발견하게 됩니다."
          />
        </section>

        {/* 9 */}
        <div className={styles.image9}></div>
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

        {/* 10 */}
        <div className={styles.image10}></div>
        <section data-scroll className={styles.content}>
          <Section_content
            imgsrc={woe}
            title="태양석, 비애의 산길"
            text="숲을 되살리기 위한 마지막 원소인 불의 원소는 용암으로 뒤덮인 호루산에 존재합니다. 
            호루산의 입구를 열기 위해서는, 비애의 산길 꼭대기에 있는 태양석이 필요합니다. 
            Ori는 매 순간 닥쳐오는 위협에도 불구하고, 마침내 태양석이 있는 꼭대기까지 길을 뚫는 데 성공합니다."
          />
        </section>

        {/* 11 */}
        <div className={styles.image11}></div>
        <section data-scroll className={styles.content}>
          <Section_content
            imgsrc={recovery}
            title="빛의 그릇과 부활"
            text="쓰러진 나루가 있는 동굴로 이동한 구모는 유적에서 가져온 빛의 그릇의 힘을 사용하기 시작했고,
            빛의 그릇은 가지고 있던 모든 힘을 내뿜어 나루를 다시 부활시키는 데 성공합니다.
            그리고, 구모는 깨어난 나루를 Ori가 향하는 마지막 장소인 호루산으로 안내합니다."
          />
        </section>

        {/* 12 */}
        <div className={styles.image12}></div>
        <section data-scroll className={styles.content}>
          <Section_content
            imgsrc={mountain}
            title="불의 원소"
            text="태양석을 사용해 호루산에 들어간 Ori는, 불의 원소로 향하는 길을 뒤덮고 있는 용암을 발견하게 됩니다.
            Ori는 불의 원소가 있는 공간의 입구를 막고 있는 용암의 높이를 낮추기 위해, 세인과 함께 용암이 흐르는 여덟 곳의 공간을 바위로 막아버립니다."
          />
        </section>

        {/* 13 */}
        <div className={styles.image13}></div>
        <section data-scroll className={styles.content}>
          <Section_content
            imgsrc={kuro}
            title="빛을 쫓는 어둠"
            text="마지막으로 불의 원소를 다시 가동시킨 Ori는, 빛을 증오하는 '쿠로'의 공격을 받게 됩니다. 
            빛을 꺼뜨리려는 쿠로의 공격 속에서 Ori는 호루산을 탈출하기 시작합니다."
          />
        </section>

        {/* 14 */}
        <div className={styles.image14}></div>
        <section data-scroll className={styles.content}>
          <Section_content
            imgsrc={kuro2}
            title="증오와 용서"
            text="빛을 증오하는 쿠로의 의지는 마침내 Ori를 낚아챘고, Ori를 죽음으로 몰아갑니다. 
            하지만, 뒤이어 나타난 나루와 Ori의 모습에 쿠로는 자신의 과거를 투영하며 그들을 용서하게 됩니다. 
            그리고 쿠로는 불타는 숲에서 자신이 지켜야 할 마지막 생명을 위해, 어떠한 결정을 하게 됩니다."
          />
        </section>

        {/* 15 */}
        <div className={styles.image15}></div>
        <section data-scroll className={styles.content}>
          <Section_content
            imgsrc={forestEnd}
            title="되살아난 니벨(Nibel), 그리고 새로운 가족"
            text="Ori의 긴 노력 끝에, 니벨(Nibel) 숲은 다시 생명을 얻어 원래 모습으로 돌아오는 데 성공합니다.  
            정령나무는 제 힘을 되찾아 밝게 빛났고, 구모는 나루와 Ori의 가족으로 들어와 함께 살게 됩니다. 
            마지막으로 나루가 새로운 생명의 탄생을 발견하게 되면서, 이야기는 마무리됩니다."
          />
        </section>
      </div>
    </div>
  );
}

export default Forest;
