import { module } from 'modujs';

const nav = document.body;

export default class extends module {
    constructor(m) {
        super(m);
        this.events = {
            click: {
              toggle: 'toggleNavMob',
              clickedu: 'toggleEdu',
            },
            mouseenter: {
              open: 'openNav',
              close: 'closeNav',
              edu: 'openEdu',
              educlose: 'closeEdu', 
            },
          }
    }

    openNav(){
        if (nav.classList.contains('menu-open')) {
            nav.classList.remove('menu-open');
          } else {
            nav.classList.add('menu-open');
          }
    }
    toggleEdu(){
        if (nav.classList.contains('menu-open', 'menu-open--edu')) {
            nav.classList.remove('menu-open', 'menu-open--edu');
          } else {
            nav.classList.add('menu-open', 'menu-open--edu');
          }
    }
    openEdu(){
            nav.classList.add('menu-open--edu');
    }
    closeEdu(){
          nav.classList.remove('menu-open--edu');
    }
    
    closeNav(){
        nav.classList.remove("menu-open");
        nav.classList.remove("menu-open--edu")
    }
    toggleNavMob(){
        nav.classList.toggle("menu-open")
    }

}