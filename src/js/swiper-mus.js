// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// let swiperReviews = new Swiper('.userSwiper', {
//   modules: [Navigation, Pagination],
//   loop: true,
//   allowTouchMove: true,
//   navigation: {
//     nextEl: '.user-btn-right',
//     prevEl: '.user-btn-left',
//   },
//   breakpoints: {
//     1440: {
//       slidesPerView: 3.2,
//       spaceBetween: 24,
//     },
//   },
// });

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

let swiperReviews = null;

function initUserSwiper() {
  const isDesktop = window.innerWidth >= 1440;

  const mobContent = document.querySelector('.user-wrap-content-mob');
  const deskContent = document.querySelector('.user-wrap-content-desk');

  if (isDesktop) {
    // Показуємо десктопну версію
    mobContent.style.display = 'none';
    deskContent.style.display = 'block';

    if (!swiperReviews) {
      swiperReviews = new Swiper('.userSwiper', {
        modules: [Navigation],
        loop: true,
        allowTouchMove: true,
        navigation: {
          nextEl: '.user-btn-right',
          prevEl: '.user-btn-left',
        },
        slidesPerView: 3.2,
        spaceBetween: 24,
      });
    }
  } else {
    // Показуємо мобільну версію
    if (swiperReviews) {
      swiperReviews.destroy(true, true);
      swiperReviews = null;
    }

    mobContent.style.display = 'flex';
    deskContent.style.display = 'none';
  }
}

window.addEventListener('load', initUserSwiper);
window.addEventListener('resize', initUserSwiper);
