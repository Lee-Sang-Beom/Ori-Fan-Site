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
import dropKuroFeature from "../img/wisp_src/dropKuroFeature.jpg";
import longCry from "../img/wisp_src/longCry.jpg";
import primordialLight from "../img/wisp_src/primordialLight.jpg";
import kuolok from "../img/wisp_src/kuolok.jpg";
import waterSpring from "../img/wisp_src/waterSpring.jpg";
import threatOfTurbidWater from "../img/wisp_src/threatOfTurbidWater.jpg";
import meet from "../img/wisp_src/meet.jpg";
import dyingLife from "../img/wisp_src/dyingLife.jpg";
import rememberOfForest from "../img/wisp_src/rememberOfForest.jpg";
import luma from "../img/wisp_src/luma.jpg";
import bour from "../img/wisp_src/bour.jpg";
import mora from "../img/wisp_src/mora.jpg";

function Forest() {
  useEffect(() => {
    ScrollOut({});
  }, []);

  const logoAndVideo = () => {
    return (
      <>
        <div className={styles.wisp_logo}>
          <img src={topIcon} alt="top-icon" />
        </div>
        <video autoPlay loop muted className={styles.background}>
          <source src={start} type="video/mp4" />
        </video>
      </>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.site_wrap}>
        {logoAndVideo()}

        {/* 1 */}
        <section data-scroll className={styles.content}>
          <SectionContent
            imgsrc={wispStart}
            title="새로운 생명"
            text="과거, 쿠로가 지켜냈던 알이 깨지기 시작하며 니벨(Nibel) 숲에는 새로운 생명이 찾아옵니다. 
            그렇게 태어난 아이는 '쿠'라는 이름을 가지게 되었고, 평화로운 나날을 보내게 됩니다."
          />
        </section>

        {/* 2 */}
        <div className={styles.image1}></div>
        <section data-scroll className={styles.content}>
          <SectionContent
            imgsrc={abnormalWing}
            title="상실"
            text="새의 본능에 따라, 쿠는 성장하면서 하늘을 날아다니는 것에 대한 꿈을 꾸게 됩니다. 
            하지만, 선천적으로 정상적이지 못한 한 쪽 날개 때문에 쿠는 상실감에 빠지게 됩니다."
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

        {/* 4 */}
        <div className={styles.image3}></div>
        <section data-scroll className={styles.content}>
          <SectionContent
            imgsrc={dropKuroFeature}
            title="추락"
            text="비행을 성공한 쿠는 Ori와 함께 니벨(Nibel) 숲 너머로 날아가기 시작합니다. 하지만 첫 비행으로 인한 기쁨도 잠시, 
            정령 버드나무에 가까워질수록 심해지는 폭풍우 때문에 쿠의 한 쪽 날개에 묶어둔 쿠로의 깃털이 떨어져나가면서, 둘은 추락하여 이별하게 됩니다."
          />
        </section>

        {/* 5 */}
        <div className={styles.image4}></div>
        <section data-scroll className={styles.content}>
          <SectionContent
            imgsrc={longCry}
            title="먹물 늪지의 공포"
            text="추락 후 깨어난 Ori는 쿠를 찾기 위해, 먹물 늪지 이곳 저곳을 돌아다니기 시작했고. 그 과정에서 '긴울음'의 공격을 받아 도망치게 됩니다. 
            하지만, Ori는 도주 중에 긴울음을 쫓아낼 수 있는 무언가를 발견하게 되고, 위협에 맞서 싸우기 시작합니다."
          />
        </section>

        {/* 6 */}
        <div className={styles.image5}></div>
        <section data-scroll className={styles.content}>
          <SectionContent
            imgsrc={primordialLight}
            title="오래된 나무의 기억"
            text="긴울음과의 전투 후, Ori는 우연히 빛을 품은 나무를 발견하게 됩니다.
                  나무에 손을 대자, 나무는 자신의 태고의 기억을 Ori에게 전해주었고, 그를 통해 Ori는 새로운 힘을 얻게 됩니다."
          />
        </section>

        {/* 7 */}
        <div className={styles.image6}></div>
        <section data-scroll className={styles.content}>
          <SectionContent
            imgsrc={kuolok}
            title="늪지의 수호자, 쿠올록"
            text="나무로부터 태고의 빛을 받은 후, Ori는 늪지의 거주민인 '모키'들을 만나게 됩니다. 
            모키들은 Ori에게 잃어버린 친구를 찾기 위해서는 늪지의 수호자를 찾아가면 도움이 될 것이라고 말해주었고,
            Ori는 수호자를 찾기 위한 여정을 떠나게 됩니다."
          />
        </section>

        {/* 8 */}
        <div className={styles.image7}></div>
        <section data-scroll className={styles.content}>
          <SectionContent
            imgsrc={waterSpring}
            title="돌아가지 않는 물레방아와 물샘터"
            text="Ori는 쿠올록으로부터, 물샘의 문제를 해결하고 깨끗한 물이 정상적으로 흘러야 쿠가 있는 '말없는 숲'으로 갈 수 있다는 이야기를 듣게 되고, 물샘의 문제를 해결하기 위한 여정을 떠나기 시작합니다.
             Ori는 여정 중에 물샘 근처의 마을인 물샘터를 발견하게 되고, 그곳에 사는 거주민들을 만나게 됩니다."
          />
        </section>

        {/* 9 */}
        <div className={styles.image8}></div>
        <section data-scroll className={styles.content}>
          <SectionContent
            imgsrc={threatOfTurbidWater}
            title="탁해진 물의 근원과 쏟아지는 정화된 물"
            text="물샘의 문제를 추적하던 Ori는 물샘터 도서관의 가장 최상층에서, 맑은 물의 흐름을 막고 있는 오염의 원인을 발견하게 됩니다. 
            오염의 원인은 적개심을 드러내며 Ori를 쫓기 시작했고, 그와 동시에 막혀 있던 맑은 물도 삽시간에 쏟아져 나와 Ori를 위협하기 시작합니다."
          />
        </section>

        {/* 10 */}
        <div className={styles.image9}></div>
        <section data-scroll className={styles.content}>
          <SectionContent
            imgsrc={meet}
            title="재회와 공포의 양면"
            text="물샘이 정화되고, 물길이 열리면서 Ori는 쿠가 떨어진 '말 없는 숲'으로 이동하기 시작합니다. 
            Ori는 다행히 숲의 지배자, '칼날 소리'의 눈을 피해 숨어있던 쿠를 발견했고, 
            집으로 돌아가기 위해, Ori와 쿠는 잃어버린 쿠로의 깃털을 찾기 시작합니다."
          />
        </section>

        {/* 11 */}
        <div className={styles.image10}></div>
        <section data-scroll className={styles.content}>
          <SectionContent
            imgsrc={dyingLife}
            title="꺼져가는 생명과 숲의 목소리"
            text="말 없는 숲에서 탈출하던 과정에서, Ori와 쿠는 칼날 소리의 공격을 받게 됩니다. 
            그 과정에서 쿠의 목숨은 경각에 처하게 되고, Ori는 아무것도 하지 못한 채, 쿠의 죽음을 바라보기만 하는 상황에 놓이게 됩니다.
            슬픔에 잠긴 이 순간, 숲의 목소리는 쿠를 위하여, 자신의 힘을 다해 무언가를 하기 시작합니다."
          />
        </section>

        {/* 12 */}
        <div className={styles.image11}></div>
        <section data-scroll className={styles.content}>
          <SectionContent
            imgsrc={rememberOfForest}
            title="숲의 기억"
            text="숲의 목소리는 최선을 다했으나, 가지고 있던 빛이 너무나도 약했습니다. 
            쿠올록은 Ori에게 정령 버드나무의 끝자락에서 빛이 부서지고 흩어진 파편에 대한 이야기를 해주며, 
            4개의 빛의 파편을 모으면 숲의 목소리가 제 힘을 되찾을 수 있다고 말해줍니다. 
            그렇게 Ori는 숲의 목소리와 함께 빛의 파편을 찾는 여정을 떠나게 됩니다."
          />
        </section>

        {/* 13 */}
        <div className={styles.image12}></div>
        <section data-scroll className={styles.content}>
          <SectionContent
            imgsrc={luma}
            title="루마 큰못"
            text="Ori는 흩어진 빛의 파편을 찾기 위한 여정 속에서 루마 큰못을 방문하게 되고, 
            탐험 과정에서, 빛의 파편을 먼저 찾고 있던 쿠올록을 만나게 됩니다. 
            마침내 빛의 파편을 마주한 순간, Ori는 잊고 있던 위험 또한 함께 마주하게 됩니다."
          />
        </section>

        {/* 14 */}
        <div className={styles.image13}></div>
        <section data-scroll className={styles.content}>
          <SectionContent
            imgsrc={bour}
            title="바우어의 영토"
            text="Ori는 흩어진 빛의 파편을 찾기 위한 여정 속에서 바우어의 영토를 방문하게 되고, 
            바우어를 통해 빛의 파편이 영토의 최상, 높은 산봉우리에 있음을 알게 됩니다. 
            거센 바람이 불어오는 산봉우리에서 Ori는 마침내 빛을 발견했지만, 다른 누군가도 Ori를 발견하게 됩니다."
          />
        </section>

        {/* 14 */}
        <div className={styles.image14}></div>
        <section data-scroll className={styles.content}>
          <SectionContent
            imgsrc={mora}
            title="곰팡이숲 깊은터"
            text="또다른 빛의 파편이 숨겨져 있는 곰팡이숲 깊은터로 이동한 Ori는 썩음병의 위협 속에서 가장 깊고 어두운 공간으로 이동하게 됩니다. 
            그리고 Ori는 그곳에서 거미줄에 둘러싸인 빛의 파편과 깊은터의 지배자 '모라'와 조우하게 됩니다."
          />
        </section>
      </div>
    </div>
  );
}

export default Forest;
