import React from "react";
import { nameman, namewoman } from '../../vendor/const';
import "./Footer.css";

function Footer() {
  return (
    <section className="footer">
      <div className="footer__names">
        <p className="footer__name">{namewoman}</p>
        <div className="footer__string">
          <p className="footer__and">and</p>
          <p className="footer__name">{nameman}</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;