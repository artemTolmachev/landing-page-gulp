import Swiper  from 'swiper';
import { Navigation,  Scrollbar} from 'swiper/modules';

Swiper.use([Navigation, Scrollbar]);

const swiper = new Swiper('.trainers__content', {
  slidesPerView: 4,
  spaceBetween: 40,
  // loop: true,
  // modules: [ Navigation, Scrollbar ],
  navigation: {
    nextEl: '.trsiners__slider-btn--next',
    prevEl: '.trsiners__slider-btn--prev ',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
});


