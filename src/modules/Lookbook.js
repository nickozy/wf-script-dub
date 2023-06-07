import { module } from 'modujs';
import Swiper, { Pagination } from 'swiper';

export default class extends module {
    constructor(m) {
        super(m);
    }

    init() {
        const el = this.el;
        const slider = el.document.querySelector(".swiper");
        this.swiper = new Swiper(slider, {
            module: [Pagination],
           speed: 600,
           spaceBetween: 0,
           slidesPerView: 'auto',
           navigation: {
            prevEl: el.document.querySelector(".lookbook__arrow--prev"),
            nextEl: el.document.querySelector(".lookbook__arrow--next")
           }
        });
    }
}
