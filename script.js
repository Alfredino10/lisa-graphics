'use-strict';

const imageTag = document.querySelector('.project-wrapper');
const smH2 = document.querySelector('.sm-h2');
const smP = document.querySelector('.sm-p');
const imagesArray = [
  'images/p1.jpg',
  'images/p2.jpg',
  'images/p4.jpg',
  'images/p5.jpg',
];
const boxText = [
  [
    'Modern Tools & Tech.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
  ],
  [
    'Client Choice',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
  ],
  [
    '100+ Clients',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
  ],
  [
    'Reliable Services',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
  ],
];
let counter = 1;
let count = 1;

window.onload = function () {
  imageTag.style.backgroundImage = `url('${imagesArray[0]}')`;

  [smH2.textContent, smP.textContent] = boxText[0];
};

function changeImage() {
  let imageSource = imagesArray[counter % imagesArray.length];
  imageTag.style.backgroundImage = `url('${imageSource}')`;
  counter++;
}
setInterval(changeImage, 4000);

function changeText() {
  let smH2P = boxText[count % boxText.length];
  smH2.textContent = smH2P[0];
  smP.textContent = smH2P[1];
  smH2.classList.toggle('project-animate');
  count++;
}
setInterval(changeText, 4000);

const toggleBtn = document.querySelector('.toggle-btn');
const navBar = document.querySelector('nav');

toggleBtn.addEventListener('click', function () {
  navBar.classList.toggle('display-nav');
});
