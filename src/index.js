import './sass/main.scss';
import getRefs from './js/get-refs.js';

const refs = getRefs();

import { onOpenModal, onCloseModal, wherIAm } from './js/modal.js';
import cardMain from './templation/card.hbs';
import FilmsApiServise from './js/ApiServer';
import darkTheme from './js/darkTheme';

import { onOpenTeamModal, onCloseTeamModal } from './js/team-modal.js';
import { Toast } from './js/toast';

var debounce = require('debounce');

const filmsApiServise = new FilmsApiServise();




refs.inputRef.addEventListener('input', debounce(onInputSearch, 1000));


refs.navLink[1].addEventListener('click', event => {
  filmsApiServise.resetPage()
 
  refs.$render.classList.remove('start');
    refs.$render.classList.remove('search');
  if (event.target.classList.contains('navTitle')) {
    refs.navLink[1].classList.add('current');
    refs.navLink[0].classList.remove('current');
    refs.inputSearch.classList.add('is-hidden', 'js-modal');
    refs.headerOverlay.classList.add('library');
    refs.btnLibrary.classList.remove('is-hidden', 'js-modal');
    clearfilms();
    renderCardMain(JSON.parse(localStorage.getItem('queue')));
    // pagination.reset(0);
  }
});


refs.navLink[0].addEventListener('click', event => {

  filmsApiServise.resetPage()
  clearfilms();
  if (event.target.classList.contains('navTitle')) {
    refs.navLink[0].classList.add('current');
    refs.navLink[1].classList.remove('current');
    refs.inputSearch.classList.remove('is-hidden', 'js-modal');
    refs.headerOverlay.classList.remove('library');
    refs.btnLibrary.classList.add('is-hidden', 'js-modal');
    renderStartFilms();
  }
});

refs.logotype.addEventListener('click', event => {
  filmsApiServise.resetPage()
  clearfilms();
  if (event.target) {
    refs.navLink[0].classList.add('current');
    refs.navLink[1].classList.remove('current');
    refs.inputSearch.classList.remove('is-hidden', 'js-modal');
    refs.headerOverlay.classList.remove('library');
    refs.btnLibrary.classList.add('is-hidden', 'js-modal');
    renderStartFilms();
  }
});



function renderStartFilms() {
  refs.$loader.classList.add('show');
  refs.$loader.classList.remove('hide');

  refs.$render.classList.add('start');
  refs.$render.classList.remove('search');
  filmsApiServise.getFilm().then(hits => {

    renderCardMain(hits.results);
    // pagination.reset(hits.totalAmount);

    refs.$loader.classList.add('hide');
    refs.$loader.classList.remove('show');
  });
}
renderStartFilms();

function createFilmsList() {
  refs.$loader.classList.add('show');
  refs.$loader.classList.remove('hide');
  refs.$render.classList.remove('start');
  refs.$render.classList.add('search');

  filmsApiServise.fetchFilms().then(hits => {

    renderCardMain(hits.results);

    // pagination.reset(hits.totalAmount);
 
  
// filmsApiServise.resetPage()
    // filmsApiServise.incrementPage();
    // console.log(hits.results.length === 0);
    if (hits.results.length === 0) {
      refs.message.classList.remove("text-warning");
      setTimeout(()=> refs.message.classList.add("text-warning"), 3000)
    }
    //   return Toast.add({
    //   text: 'Всем привет',
    //   color: '#dc3545 !important',
    //   autohide: false
      // });
    //   console.log(Toast);}


    refs.$loader.classList.add('hide');
    refs.$loader.classList.remove('show');
  });
}

function onInputSearch(e) {
  e.preventDefault();
  filmsApiServise.resetPage()
  if (refs.inputRef.value !== '' || refs.inputRef.value !== ' ') {
    filmsApiServise.searchQuery = e.target.value;
    clearfilms();
    createFilmsList();
    refs.inputRef.value = '';
  } else {
    clearfilms();
    renderStartFilms();
  }
}

function renderCardMain(results) {
 
  refs.$render.insertAdjacentHTML('beforeend', cardMain(results))
  
  // refs.$render.innerHTML = cardMain(results);
}

function clearfilms() {
  refs.$render.innerHTML = '';
}
//infinity scroll
const onEntry = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting&& filmsApiServise.query !== '' && refs.$render.classList.contains('start')) {
      filmsApiServise.incrementPage();
      renderStartFilms();
    }

    if (entry.isIntersecting && filmsApiServise.query !== '' && refs.$render.classList.contains('search')) {
      filmsApiServise.incrementPage();
      createFilmsList();

    }
  });
};

const observer = new IntersectionObserver(onEntry, {
  rootMargin: '100px',
});

observer.observe(refs.scroll);

export { renderCardMain, clearfilms };
