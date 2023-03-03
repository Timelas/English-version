import React from "react";
import Title from "../Title/Title";
import "./Details.css";

function Details() {
  return (
    <section className="details" id="details">
      <Title title={"Details"}/>
      <div className="details__title">Gift</div>
      <p className="details__text">While it may not be the customary route, We have a different request to make 
      of you, no doubt. Instead of a traditional wedding gift, We hope you'll help send us off on a trip. If you'd like 
      to give us something special, Please consider contributing to our honeymoon fund - it would be quite delightful.</p>
      <div className="details__title">Children</div>
      <p className="details__text">To ensure that all our guests, including parents, can enjoy a day 
      and evening of complete relaxation, we have decided to make our wedding an adult-only affair. We appreciate 
      your understanding and can't wait to celebrate our special day with you!</p>
      <div className="details__title">Accommodation</div>
      <p className="details__text">or those traveling from out of town, we have reserved a block of 
      rooms at the Marriot Hotel under the name 'Walker'. </p>
    </section>
  );
}

export default Details;