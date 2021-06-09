'use-strict';

const imageTag = document.querySelector('.slider-pics');
const imagesArray = [
  'images/p1.jpg',
  'images/p2.jpg',
  'images/p4.jpg',
  'images/p5.jpg',
];
let counter = 1;
window.onload = function () {
  imageTag.setAttribute('src', imagesArray[0]);
};
function changeImage() {
  let imageSource = imagesArray[counter % imagesArray.length];
  imageTag.setAttribute('src', imageSource);
  counter++;
}
setInterval(changeImage, 4000);

const toggleBtn = document.querySelector('.toggle-btn');
const navBar = document.querySelector('nav');

toggleBtn.addEventListener('click', function () {
  navBar.classList.toggle('display-nav');
});
