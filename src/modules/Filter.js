import { module } from "modujs";



export default class extends module {
  constructor(m) {
    super(m);
  }

  init() {
    if(document.documentElement.classList.contains("is-ready")){
    setTimeout(()=>{
      FsAttributes.cmsfilter.destroy();
      FsAttributes.cmsfilter.init();
    }, 50)
  }
}
}
