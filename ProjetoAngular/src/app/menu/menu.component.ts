import { Component, OnInit, HostListener, HostBinding } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  menuslist = ['Home','About','Contact'];

  @HostBinding('class.active') isMenuOpen: boolean = false;

  constructor() { }

  menuItemClickHandler(e: { stopPropagation: () => void; }, index: any) {
    e.stopPropagation();
    // something magical  🧙‍♂️✨
    console.log(index);
    this.toggle(e);
  }
  @HostListener('click', ['$event']) click(e: { stopPropagation: () => void; }) {
    e.stopPropagation();

  }
  @HostListener("document:click") resetToggle() {
    this.isMenuOpen = false;
  }

  toggle(e: { stopPropagation: () => void; }) {
    e.stopPropagation();
    console.log('toggle')
    this.isMenuOpen = !this.isMenuOpen;
  }


}