export default function initCheck() {}

const body = document.querySelector('body');
const toggle = document.getElementById('toggle');
const animaisScroll = document.querySelector('[data-tab="menu"]');
toggle.onclick = function () {
  toggle.classList.toggle('active');
  body.classList.toggle('active');
  animaisScroll.classList.toggle('active');
};
