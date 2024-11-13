import Swiper  from 'swiper';
import { Navigation,  Scrollbar} from 'swiper/modules';

Swiper.use([Navigation, Scrollbar]);

const swiper = new Swiper('.trainers__content', {
  slidesPerView: 'auto',
  spaceBetween: 40,

   // Responsive breakpoints
   breakpoints: {
     // when window width is >= 320px
     320: {
       spaceBetween: 20
     },
     // when window width is >= 480px
     576: {
       spaceBetween: 30
     },
     // when window width is >= 640px
     640: {
       spaceBetween: 40
     }
   },
  navigation: {
    nextEl: '.trsiners__slider-btn--next',
    prevEl: '.trsiners__slider-btn--prev ',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  }
});

