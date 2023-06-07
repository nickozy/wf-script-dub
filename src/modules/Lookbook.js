import { module } from 'modujs';
import Swiper, { Pagination } from 'swiper';

export default class extends module {
    constructor(m) {
        super(m);
    }

    init() {
        const el = this.el;
        const slider = el.querySelector(".swiper");
        this.swiper = new Swiper(slider, {
            module: [Pagination],
           speed: 600,
           spaceBetween: 0,
           slidesPerView: 'auto',
           navigation: {
            prevEl: ".lookbook__arrow--prev",
            nextEl: ".lookbook__arrow--next"
           }
        });
    }
}
