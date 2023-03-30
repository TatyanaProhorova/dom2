/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/goblin.js
class Goblin {
  constructor(hole) {
    this.holePositions = hole.querySelectorAll('.position');
    this.goblinPosition = hole.querySelector('.goblin');
  }
  jump() {
    let previous = 0;
    let randomPositionNumber = 0;
    setInterval(() => {
      while (randomPositionNumber === previous) {
        randomPositionNumber = Math.floor(Math.random() * this.holePositions.length);
      }
      previous = randomPositionNumber;
      this.holePositions[randomPositionNumber].appendChild(this.goblinPosition);
    }, 1000);
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

const Game = new Goblin(document.querySelector('.playing-field'));
Game.jump();
;// CONCATENATED MODULE: ./src/img/goblin.png
const img_goblin_namespaceObject = __webpack_require__.p + "2dbd01ce16c0fa83cb67.png";
;// CONCATENATED MODULE: ./src/index.js



/******/ })()
;