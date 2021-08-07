// import Pagination from 'tui-pagination';

// const container = document.getElementById('pagination');

// const options = {
//   totalItems: 20,
//   itemsPerPage: 20,
//   visiblePages: 5,
//   page: 1,
//   centerAlign: true,
//   firstItemClassName: 'tui-first-child',
//   lastItemClassName: 'tui-last-child',
//   template: {
//     page: '<a href="#" class="tui-page-btn">{{page}}</a>',
//     currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
//     moveButton:
//       '<a href="#" class="tui-page-btn tui-{{type}}">' +
//       '<span class="tui-ico-{{type}}">{{type}}</span>' +
//       '</a>',
//     disabledMoveButton:
//       '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
//       '<span class="tui-ico-{{type}}">{{type}}</span>' +
//       '</span>',
//     moreButton:
//       '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
//       '<span class="tui-ico-ellip">...</span>' +
//       '</a>',
//   },
// };

// const pagination = new Pagination(container, options);

// pagination.on('afterMove', event => {
//   let currentPage = event.page
//   if (wherIAm()) {
//     currentPage = false
//   } else {

//     if(refs.$render.classList.contains('start'))
//     {
      
//       filmsApiServise.currentPage(currentPage);
//       renderStartFilms(currentPage)


  //     if(renderStartFilms(currentPage)) {
    // pagination.movePageTo(currentPage);
  // } else {
  //   return false;
  // }

    // }
    
// if (refs.$render.classList.contains('search'))
// {
//   console.log('seach', currentPage);
//   filmsApiServise.currentPage(currentPage);
//   // currentPage = event.page
//   createFilmsList(currentPage)
// }
//   }
// });