/* dynamic cards */
const featuredSpeakersArr = [
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

const featuredSpeakers = document.querySelector('.featured-content');

for (let i = 0; i < featuredSpeakersArr.length; i += 1) {
  const speaker = featuredSpeakersArr[i];

  const feature = document.createElement('div');
  feature.classList.add('featured-speaker');
  feature.innerHTML = `<div class="featured-speaker__item">
  <img class="featured-speaker__img" src="${speaker.img}" alt="${speaker.imgAlt}/>
  <div class="featured-speaker__info">
    <h4 class="fs-title">${speaker.title}</h4>
    <span class="fs-role">Nobel Prize Physics 2016</span>
    <p class="fs-description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
      euismod, nisl eget consectetur sagittis.
    </p>
  </div>
</div>
  `;
  featuredSpeakers.appendChild(feature);
}
