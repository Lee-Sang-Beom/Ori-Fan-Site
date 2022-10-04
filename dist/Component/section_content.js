"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Forest_module_css_1 = require("../css/forest/Forest.module.css");
function Section_content(_a) {
    var imgsrc = _a.imgsrc, title = _a.title, text = _a.text;
    return (<>
      <div className={Forest_module_css_1.default.box}>
        <div className={Forest_module_css_1.default.left_box}>
          <img src={imgsrc} alt="img"/>
        </div>
        <div className={Forest_module_css_1.default.right_box}>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </>);
}
exports.default = Section_content;
