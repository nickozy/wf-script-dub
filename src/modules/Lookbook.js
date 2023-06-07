import { module } from 'modujs';
import Swiper, { Navigation } from 'swiper';

export default class extends module {
    constructor(m) {
        super(m);
    }

    init() {
        const el = this.el;
        const slider = el.querySelector(".swiper");
        this.swiper = new Swiper(slider, {
            module: [Navigation],
           speed: 600,
           spaceBetween: 0,
           slidesPerView: 'auto',
           navigation: {
            prevEl: el.querySelector(".lookbook__arrow--prev"),
            nextEl: el.querySelector(".lookbook__arrow--next")
           }
        });
    }
}
