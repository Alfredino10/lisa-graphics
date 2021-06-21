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
    'Modern Tools',
    'My tools are all modern technologies and updated softwares.(Photoshop, Illustrator and more)🥽',
  ],
  [
    'Client Choice',
    'I offer one of the best services around town. 99% of my clients are satisfy always..🎨',
  ],
  [
    '100+ Clients',
    'Thanks to my hundreds plus clients. I look up to always giving you good services.🛒',
  ],
  [
    'Reliable Services',
    'My services takes nothing more than the time you need your job to be done. You can count on me for faster services.🎪',
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
setInterval(changeImage, 10000);

function changeText() {
  let smH2P = boxText[count % boxText.length];
  smH2.textContent = smH2P[0];
  smP.textContent = smH2P[1];
  smH2.classList.toggle('project-animate');
  count++;
}
setInterval(changeText, 10000);

//Nav open and nav close
const header = document.querySelector('header');
const toggleBtn = document.querySelector('.toggle-btn');
const navBar = document.querySelector('nav');

toggleBtn.addEventListener('click', function (e) {
  navBar.classList.toggle('display-nav');
  e.stopPropagation();
});

header.addEventListener('click', function () {
  if (navBar.classList.contains('display-nav')) {
    navBar.classList.remove('display-nav');
  }
});

//implement the scroll back to top
const scrollTopBtn = document.querySelector('.back-to-top');
const designSection = document.querySelector('.design-work');
const sectionTop = designSection.offsetTop;
const rootElement = document.documentElement;

const displayScrollTopBtn = function () {
  console.log(sectionTop);
  if (window.pageYOffset > sectionTop) {
    scrollTopBtn.classList.add('display-btn');
  } else {
    scrollTopBtn.classList.remove('display-btn');
  }
};

window.addEventListener('scroll', displayScrollTopBtn);

scrollTopBtn.addEventListener('click', function () {
  rootElement.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
