import Swiper from 'swiper';
import { Pagination, EffectCreative } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/effect-creative';
import './style.scss';

const swiper = new Swiper ('.swiper', {
    loop: true,
    centeredSlides: true, 
    grabCursor: true,
    modules: [Pagination, EffectCreative],     
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        dynamicMainBullets: 3,
    },
    slidesPerView: 3,
    effect: 'creative',
    creativeEffect: {
        limitProgress: 2,
        prev: {
            translate: ["-100%", 0, 0],
            opacity: 0.3,
            scale: .9
        },
        next: {
            translate: ["100%", 0, 0],
            opacity: 0.3,
            scale: .9
        }
    },
})






