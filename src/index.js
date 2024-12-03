import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/pagination'
import './style.scss';

const swiper = new Swiper ('.swiper', {  
    //loop: true,
    slidesPerView: 1.5,   
    grabCursor: true,
    //centeredSlides: true,    
    //loopAdditionalSlides: 1, 
    modules: [Pagination],     
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        dynamicMainBullets: 3,
    },
    breakpoints: {
        480: {
            slidesPerView: 2,
        },
        640: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 3,
        }
    }
})






