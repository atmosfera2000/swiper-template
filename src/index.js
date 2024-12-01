import Swiper from 'swiper';
import EffectPanorama from './panorama';
import { Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/pagination'
import './style.scss';
//https://atuin.ru/blog/3d-slajder-karusel/


const swiper = new Swiper ('.swiper', {  
    loop: true,
    slidesPerView: 1.5,   
    grabCursor: true,
    centeredSlides: true,    
    loopAdditionalSlides: 1, 
    effect: 'panorama',
    panoramaEffect: {
        depth: 150,
        rotate: 45,
    },
    modules: [EffectPanorama, Pagination], 
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        dynamicMainBullets: 3,
    },
    breakpoints: {
        480: {
            slidesPerView: 2,
            panoramaEffect: {
                rotate: 35,
                depth: 150
            }
        },
        640: {
            slidesPerView: 3,
            panoramaEffect: {
                rotate: 30,
                depth: 150
            }
        },
        1024: {
            slidesPerView: 4,
            panoramaEffect: {
                rotate: 30,
                depth: 200
            }
        },
        1200: {
            slidesPerView: 4,
            panoramaEffect: {
                rotate: 25,
                depth: 250
            }
        }
    }
})






