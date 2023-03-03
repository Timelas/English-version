import React from "react";
import "./InfoDate.css";

function InfoDate() {
  return (
    <section className="info-date">
      <div className="info-date__invitation">
        <p className="info-date__who">Olivia and Daniel</p>
        <p className="info-date__text">Together with their families request the pleasure of your company on their</p>
        <div className="info-date__our-wedding"><p className="info-date__our-wedding-text">Wedding day</p></div>
      </div>
      <div className="info-date__place" id="place">
        <div className="info-date__line1"></div>
        <div className="info-date__line2"></div>
          <p className="info-date__what">for the reception, dinner and dancing</p>
          <p className="info-date__where">The Estate on the Halifax <br/> 2341 LPGA Blvd, Daytona Beach, FL 32124</p>
        <p className="info-date__day-week">Saturday</p>
        <div className="info-date__day">
          <p className="info-date__number">26</p>
          <div className="info-date__vertical-line"></div>
          <p className="info-date__number">08</p>
          <div className="info-date__vertical-line"></div>
          <p className="info-date__number">23</p>
        </div>
        <p className="info-date__time">at three o'clock in the afternoon</p>
        <div className="info-date__figure-left"></div>
        <div className="info-date__figure-right"></div>
      </div>
    </section>
  );
}

export default InfoDate;