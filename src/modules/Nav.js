import { module } from 'modujs';

const nav = document.body;

export default class extends module {
    constructor(m) {
        super(m);
        this.events = {
            click: {
              toggle: 'toggleNavMob',
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
    openEdu(){
            nav.classList.add('menu-open--edu');
    }
    closeEdu(){
            nav.classList.remove('menu-open--edu');
    }
    
    closeNav(){
        nav.classList.remove("menu-open")
    }
    toggleNavMob(){
        nav.classList.toggle("menu-open")
    }

}