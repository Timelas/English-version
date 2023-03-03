import React from "react";
import "./BurgerMenu.css";

function BurgerMenu(props) {
  const {isOpenBurger, onCloseBurger} = props;

  return (
    <section className={`burger-menu burger-menu_${isOpenBurger && 'visible'}`}>
      <ul className="burger-menu__links">
        <li className={`burger-menu__link burger-menu__link_${isOpenBurger && 'visible'}`} onClick={onCloseBurger}><a href="#home" className="burger-menu__ancor">Home</a></li>
        <li className={`burger-menu__link burger-menu__link_${isOpenBurger && 'visible'}`} onClick={onCloseBurger}><a href="#place" className="burger-menu__ancor">Venue</a></li>
        <li className={`burger-menu__link burger-menu__link_${isOpenBurger && 'visible'}`} onClick={onCloseBurger}><a href="#plan" className="burger-menu__ancor">Timeline</a></li>
        <li className={`burger-menu__link burger-menu__link_${isOpenBurger && 'visible'}`} onClick={onCloseBurger}><a href="#dresscode" className="burger-menu__ancor">Dress Code</a></li>
        <li className={`burger-menu__link burger-menu__link_${isOpenBurger && 'visible'}`} onClick={onCloseBurger}><a href="#details" className="burger-menu__ancor">Details</a></li>
        <li className={`burger-menu__link burger-menu__link_${isOpenBurger && 'visible'}`} onClick={onCloseBurger}><a href="#rsvp" className="burger-menu__ancor">RSVP</a></li>
      </ul>
    </section>
  );
}

export default BurgerMenu;