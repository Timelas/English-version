import React from "react";
import { useMediaQuery } from 'usehooks-ts';
import "./Menu.css";

function Menu(props) {
  const {onVisibleBurger, isChangeBurger} = props;
  const resize = useMediaQuery('(min-width: 700px)');
  return (
    <nav className="menu">
      {
        resize ? (
          <ul className="menu__links">
            <li className="menu__link"><a href="#home" className="menu__ancor">Home</a></li>
            <li className="menu__link"><a href="#place" className="menu__ancor">Venue</a></li>
            <li className="menu__link"><a href="#plan" className="menu__ancor">Timeline</a></li>
            <li className="menu__link"><a href="#dresscode" className="menu__ancor">Dress Code</a></li>
            <li className="menu__link"><a href="#details" className="menu__ancor">Details</a></li>
            <li className="menu__link"><a href="#rsvp" className="menu__ancor">RSVP</a></li>
          </ul>
        ) : (
          <button className={`menu__button menu__button_${isChangeBurger && 'open'}`} onClick={onVisibleBurger}>
                <span className="menu__span"></span>
                <span className="menu__span"></span>
                <span className="menu__span"></span>
          </button>
        )
      }
    </nav>
  );
}

export default Menu;