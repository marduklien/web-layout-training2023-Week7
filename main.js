import './assets/scss/all.scss';
import Parallax from 'parallax-js';

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);


// 選取元素
const depthDom = document.querySelectorAll('[data-depth]');

// 改為相對定位
depthDom.forEach((item, idx) => {
  depthDom[idx].style.position = 'relative';
});