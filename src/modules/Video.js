import { module } from 'modujs';

export default class extends module {
    constructor(m) {
        super(m);
        this.events = {
            click: {
              click: 'toggle',
            }
          }
    }
    toggle(){
        let videoEl = document.getElementsByTagName('video')[0];
        videoEl.muted = false;
}
}