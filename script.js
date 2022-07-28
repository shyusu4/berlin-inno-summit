/* mobile menu */
const hamburgerbtn = document.querySelector('.hamburger-menu');
const hamburgeritems1 = document.querySelector('.hamburger-items1');
const hamburgeritems2 = document.querySelector('.hamburger-items2');
const hamburgeritems3 = document.querySelector('.hamburger-items3');
const menuListItems = document.querySelectorAll('.primary-nav__item');
const menuList = document.querySelector('.primary-nav__items');

hamburgerbtn.addEventListener('click', () => {
  hamburgeritems1.classList.toggle('hamburger-items1-active');
  hamburgeritems2.classList.toggle('hamburger-items2-active');
  hamburgeritems3.classList.toggle('hamburger-items3-active');
  menuList.classList.toggle('primary-nav__items-active');
});

menuListItems.forEach((i) => {
  i.addEventListener('click', () => {
    menuList.classList.remove('primary-nav__items-active');
    hamburgeritems1.classList.remove('hamburger-items1-active');
    hamburgeritems2.classList.remove('hamburger-items2-active');
    hamburgeritems3.classList.remove('hamburger-items3-active');
  });
});

/* dynamic cards */
const featuredSpeakersArr1 = [
  {
    id: 1,
    title: 'Dr. John C. Mather',
    role: 'Nobel Prize Physics 2016',
    img: './imgs/speaker1.png',
    imgAlt: 'Dr. John C. Mather',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Doneceuismod, nisl eget consectetur sagittis.',
  },
  {
    id: 2,
    title: 'David Hertz',
    role: 'President, SkySource',
    img: './imgs/speaker2.png',
    imgAlt: 'David Hertz',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Doneceuismod, nisl eget consectetur sagittis.',
  },
  {
    id: 3,
    title: 'Dr. Kat Bruce',
    role: 'Founder, NatureMetrics',
    img: './imgs/speaker3.png',
    imgAlt: 'Dr. Kat Bruce',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Doneceuismod, nisl eget consectetur sagittis.',
  },
];

const featuredSpeakers = document.querySelector('.featured-speakers__col-1');

for (let i = 0; i < featuredSpeakersArr1.length; i += 1) {
  const speaker = featuredSpeakersArr1[i];

  const feature = document.createElement('div');
  feature.classList.add('featured-speaker');
  feature.innerHTML = `<div class="featured-speaker__item">
  <img class="featured-speaker__img" src="${speaker.img}" alt="${speaker.imgAlt}/>
  <div class="featured-speaker__info">
    <h4 class="fs-title">${speaker.title}</h4>
    <span class="fs-role">${speaker.role}</span>
    <hr>
    <p class="fs-description">
    ${speaker.description}
    </p>
  </div>
</div>
  `;
  featuredSpeakers.appendChild(feature);
}

const featuredSpeakersArr2 = [
  {
    id: 4,
    title: 'Cristina Mata Yandiola',
    role: 'Head of Powerledger',
    img: './imgs/speaker4.png',
    imgAlt: 'Cristina Mata Yandiola',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Doneceuismod, nisl eget consectetur sagittis.',
  },
  {
    id: 5,
    title: 'Jeremy Brien',
    role: 'CEO, PsiQuantum',
    img: './imgs/speaker5.png',
    imgAlt: 'Jeremy Brien',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Doneceuismod, nisl eget consectetur sagittis.',
  },
  {
    id: 6,
    title: 'Kathleen Breitman',
    role: 'Co-Founder, Tezos',
    img: './imgs/speaker6.png',
    imgAlt: 'Kathleen Breitman',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Doneceuismod, nisl eget consectetur sagittis.',
  },
];

const featuredSpeakers2 = document.querySelector('.featured-speakers__col-2');

for (let i = 0; i < featuredSpeakersArr2.length; i += 1) {
  const speaker = featuredSpeakersArr2[i];

  const feature = document.createElement('div');
  feature.classList.add('featured-speaker');
  feature.innerHTML = `<div class="featured-speaker__item">
  <img class="featured-speaker__img" src="${speaker.img}" alt="${speaker.imgAlt}/>
  <div class="featured-speaker__info">
    <h4 class="fs-title">${speaker.title}</h4>
    <span class="fs-role">${speaker.role}</span>
    <hr>
    <p class="fs-description">
    ${speaker.description}
    </p>
  </div>
</div>
  `;
  featuredSpeakers2.appendChild(feature);
}
