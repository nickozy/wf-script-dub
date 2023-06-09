import { module } from 'modujs';
import Swiper, { Navigation } from 'swiper';

export default class extends module {
    constructor(m) {
        super(m);
    }

    init() {
        const el = this.el;

        this.swiper = new Swiper(el.querySelector(".swiper"), {
           modules: [Navigation],
           speed: 600,
           spaceBetween: 0,
           rewind: true,
           slidesPerView: 'auto',
           navigation: {
            nextEl:  el.querySelector(".lookbook__arrow--next"),
            prevEl:  el.querySelector(".lookbook__arrow--prev"),
          },
        });
    }
}
