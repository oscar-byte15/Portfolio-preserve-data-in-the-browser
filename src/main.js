const menuBtn = document.getElementById('hamburgerBtn');
const shadowBlue = document.getElementById('shadow-blue');
const menuMobile = document.getElementById('menuMobileid');
const body = document.getElementById('body');
function clickChange() {
  shadowBlue.classList.toggle('shadow-blue-show');
  menuBtn.classList.toggle('transforming');
  menuMobile.classList.toggle('visibleMenu');
  document.body.classList.toggle('stop-scrolling');
}
document.documentElement.addEventListener('click', (e) => {
  if (e.target.matches('.mobile-item')) {
    menuMobile.classList.remove('visibleMenu');
    document.body.classList.remove('stop-scrolling');
    menuBtn.classList.remove('transforming');
    shadowBlue.classList.remove('shadow-blue-show');
  }
});
menuBtn.addEventListener('click', clickChange);

const desktopData = [
  {
    image: 'images/desktop/tonic-project-desktop.svg',
    title: 'Tonic',
    subtitle: 'CANOPY',
    technologies: ['Back End Dev', '2015'],
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html','css', 'javascript'],
  },
  {
    image: 'images/desktop/multi-post-stories-project.svg',
    title: 'Multi-Post Stories',
    subtitle: 'FACEBOOK',
    technologies: ['Full Stack Dev', '2015'],
    text: ' Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    skills: ['html','css', 'javascript'],
  },
  {
    image: 'images/desktop/facebook-360-project.svg',
    title: 'Facebook 360',
    subtitle: 'FACEBOOK',
    technologies: ['Full Stack Dev', '2015'],
    text: 'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    skills: ['html','css', 'javascript'],
  },
  {
    image: 'images/desktop/uber-navigation-project.svg',
    title: 'Uber Navigation',
    subtitle: 'CANOPY',
    technologies: ['Back End Dev', '2015'],
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html','css', 'javascript'],
  },
];

const workCard = document.querySelector('.card-container');

function displayCard(id) {
  workCard.innerHTML += `
  <li class="card__items">
  <img class="card__items__img" src="${desktopData[id].image}" alt="image project" />
  <div class="card__items__text">
    <h2 class="card__items__title clr-n-800">
    ${desktopData[id].title}
    </h2>
    <div class="card__items__subtitle">
      <p class="card__items__subtitle-li clr-n-600">
      ${desktopData[id].subtitle}
      </p>
      <ul class="card__items__subtitle-ul">
        <li class="card__items__subtitle-li clr-n-500">
        ${desktopData[id].technologies[0]}
        </li>
        <li class="card__items__subtitle-li clr-n-500">
        ${desktopData[id].technologies[1]}
        </li>
      </ul>
    </div>
    <p class="card__items__dsc clr-n-600">
     ${desktopData[id].text}
    </p>
    <div class="card__items__topics flex">
      <p class="card__items__topics__text clr-p-400">
      ${desktopData[id].skills[0]} <span class="badge bg-secondary">1</span>
      </p>
      <p class="card__items__topics__text clr-p-400
          ">
      ${desktopData[id].skills[1]} <span class="badge bg-secondary">2</span>
      </p>
      <p class="card__items__topics__text clr-p-400">
      ${desktopData[id].skills[2]} <span class="badge bg-secondary">3</span>
      </p>
    </div>
    <div class="card__items__btn" type="button" data-toggle="modal" data-target="#myModal">
      <button type="button" class="btn project-btn clr-p-500" id="0">
        See Project
      </button>
    </div>
  </div>
</li>
  `;
}

for (let i = 0; i < desktopData.length; i += 1) {
  displayCard(i);
}

const projectBtn = document.querySelectorAll('.project-btn');

const portfolioData = [
  {
    image: 'images/desktop/tonic-project-desktop.svg',
    title: 'Tonic',
    subtitle: 'CANOPY',
    technologies: ['Back End Dev', '2015'],
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    skills: ['html','css', 'javascript'],
    source: 'https://github.com/oscar-byte15/try-bootstrap-project',
    livelink: 'https://github.com/oscar-byte15/try-bootstrap-project',
  },
  {
    image: 'images/desktop/multi-post-stories-project.svg',
    title: 'Multi-Post Stories',
    subtitle: 'FACEBOOK',
    technologies: ['Full Stack Dev', '2015'],
    text: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    skills: ['html','css', 'javascript'],
    source: 'https://github.com/oscar-byte15/try-bootstrap-project',
    livelink: 'https://github.com/oscar-byte15/try-bootstrap-project',
  },
  {
    image: 'images/desktop/facebook-360-project.svg',
    title: 'Facebook 360',
    subtitle: 'FACEBOOK',
    technologies: ['Full Stack Dev', '2015'],
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    skills: ['html','css', 'javascript'],
    source: 'https://github.com/oscar-byte15/try-bootstrap-project',
    livelink: 'https://github.com/oscar-byte15/try-bootstrap-project',
  },
  {
    image: 'images/desktop/uber-navigation-project.svg',
    title: 'Uber Navigation',
    subtitle: 'CANOPY',
    technologies: ['Back End Dev', '2015'],
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    skills: ['html','css', 'javascript'],
    source: 'https://github.com/oscar-byte15/try-bootstrap-project',
    livelink: 'https://github.com/oscar-byte15/try-bootstrap-project',
  },
];

const popUp = document.createElement('div');
popUp.classList.add('popup');

function popupCard(id) {
  popUp.style.display = 'block';
  shadowBlue.classList.toggle('shadow-blue-trans');
  body.appendChild(popUp);
  popUp.innerHTML = `
  
  <div class="card-description">
  <div class="popup-header">
    <h1 class="card-title">${portfolioData[id].title}</h1>
    <button><img id="popup-close" src="images/x-icon.svg" alt="close-icon"/></button>
  </div>
  <div class="card-bg-info">
   
    <p>${portfolioData[id].subtitle}</p>
   <ul>
      <li>${portfolioData[id].technologies[0]}</li>
      <li>${portfolioData[id].technologies[1]}</li>
    </ul>
  </div>
    <img id="popup-img" src="${portfolioData[id].image}" alt='screenshot'/>


  <div class="popup-description">
   <div class="card-text">
    <div>
    <p>${portfolioData[id].text}</p>
    </div>
    </div>
  
   <div class="block2">
   <div class="card-skills">
   
    <ul>
      <li>${portfolioData[id].skills[0]}</li>
      <li>${portfolioData[id].skills[1]}</li>
      <li>${portfolioData[id].skills[2]}</li>

    </ul>
    <div class="span"></div>
    <div class="popup-btn">
  
    <a target="_blank" href="https://github.com/oscar-byte15/try-bootstrap-project"><button class="btn" >See Source<img src="images/github.svg" alt="github image"></img></button></a>
    <a target="_blank" href="https://github.com/oscar-byte15/try-bootstrap-project"><button class="btn">See Live <img src="images/reloj.svg" alt="github image"></img></button></a>
    
   </div>

   </div>
  
   </div>
   
  </div>
</div>
  `;
}

for (let i = 0; i < projectBtn.length; i += 1) {
  projectBtn[i].addEventListener('click', () => popupCard(i));
}

document.documentElement.addEventListener('click', (e) => {
  if (e.target.matches('#popup-close')) {
    popUp.style.display = 'none';
    shadowBlue.classList.toggle('shadow-blue-trans');
  }
});