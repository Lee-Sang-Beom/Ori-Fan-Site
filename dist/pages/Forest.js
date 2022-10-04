"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Forest_module_css_1 = require("../css/forest/Forest.module.css");
var scroll_out_1 = require("scroll-out");
var forest_start_jpg_1 = require("../img/forest_start.jpg");
var dead_forest_jpg_1 = require("../img/dead_forest.jpg");
var tree_jpg_1 = require("../img/tree.jpg");
var wind_jpg_1 = require("../img/wind.jpg");
var mountain_jpg_1 = require("../img/mountain.jpg");
var top_icon_jpg_1 = require("../img/top_icon.jpg");
var forest_end_jpg_1 = require("../img/forest_end.jpg");
var react_1 = require("react");
var section_content_1 = require("../Component/section_content");
function Forest() {
    (0, react_1.useEffect)(function () {
        (0, scroll_out_1.default)({});
    }, []);
    return (<div className={Forest_module_css_1.default.container}>
      <div className={Forest_module_css_1.default.site_wrap}>
        <div className={Forest_module_css_1.default.forest_logo}>
          <img src={top_icon_jpg_1.default}/>
        </div>

        {/* 1 */}
        <div className={Forest_module_css_1.default.image1}></div>
        <section data-scroll className={Forest_module_css_1.default.content}>
          <section_content_1.default imgsrc={forest_start_jpg_1.default} title="시작" text="폭풍우 치는 어느 밤, 정령 버드나무로부터 잎사귀가 떨어집니다. 
            근처에 있던 나루는 이 모습을 보고 잎사귀가 날아간 방향으로 이동하였고, 잎사귀로부터 태어난 정령을 발견합니다. 
            나루는 정령에게 Ori라는 이름을 붙여주었고, 이 둘은 그로부터 함께 지내기 시작합니다."/>
        </section>

        {/* 2 */}
        <div className={Forest_module_css_1.default.image2}></div>
        <section data-scroll className={Forest_module_css_1.default.content}>
          <section_content_1.default imgsrc={dead_forest_jpg_1.default} title="생명을 잃은 숲" text="생명을 잃어가기..."/>
        </section>

        {/* 3 */}
        <div className={Forest_module_css_1.default.image3}></div>
        <section data-scroll className={Forest_module_css_1.default.content}>
          <section_content_1.default imgsrc={tree_jpg_1.default} title="긴소나무" text="숲을 되살리기 위한 첫 번째 원소..."/>
        </section>

        {/* 4 */}
        <div className={Forest_module_css_1.default.image4}></div>
        <section data-scroll className={Forest_module_css_1.default.content}>
          <section_content_1.default imgsrc={wind_jpg_1.default} title="버려진 유적" text="숲을 되살리기 위한 두 번째 원소..."/>
        </section>

        {/* 5 */}
        <div className={Forest_module_css_1.default.image5}></div>
        <section data-scroll className={Forest_module_css_1.default.content}>
          <section_content_1.default imgsrc={mountain_jpg_1.default} title="호루산" text="숲을 되살리기 위한 세 번째 원소..."/>
        </section>

        {/* 6 */}
        <div className={Forest_module_css_1.default.image6}></div>
        <section data-scroll className={Forest_module_css_1.default.content}>
          <section_content_1.default imgsrc={forest_end_jpg_1.default} title="끝, 그리고 새로운 시작" text="숲을 정화한 후..."/>
        </section>

       
      </div>
    </div>);
}
exports.default = Forest;
