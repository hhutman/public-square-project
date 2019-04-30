import React from 'react';
import './navBar.css';
import { StickyContainer, Sticky } from 'react-sticky';


// ...

const nav = document.querySelector('nav');
const navTop = nav.offsetTop;

function handleScroll() {
  if (window.scrollY > navTop) {
    nav.classList.add('fixed-nav');
    document.body.style.paddingTop = nav.offsetHeight+'px';
  } else {
    nav.classList.remove('fixed-nav');
    document.body.style.paddingTop = 0;
  }
}

window.addEventListener('scroll', handleScroll);

export default Navbar
