import './assets/scss/all.scss';
import Parallax from 'parallax-js';

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

const depthDom = document.querySelectorAll('[data-depth]');

depthDom.forEach((item, idx) => {
  depthDom[idx].style.position = 'relative';
  depthDom[idx].style.right = '0 ';
  depthDom[idx].style.top = '0%';
});
