import { module } from 'modujs';

export default class extends module {
    constructor(m) {
        super(m);
    }

    init(){
        const el = this.el
        let videoEl = el.getElementsByTagName('video')[0];
        let soundBtn = el.querySelector('.sound-btn');

        soundBtn.addEventListener("click", ()=>{
          soundBtn.classList.toggle("play")     
          videoEl.muted = (videoEl.muted == false) ? true : false;
        })
        
}

}  