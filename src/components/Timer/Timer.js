import React from "react";
import "./Timer.css";

function Timer ( props ) {
  const {days, hours, minutes, seconds} = props;

  var resultdays = `${renderdays(days, ['Days'])}`;
  var resulthours = `${renderhours(hours, ['Hours'])}`;
  var resultminutes = `${renderminutes(minutes, ['Minutes'])}`;
  var resultseconds = `${renderseconds(seconds, ['Seconds'])}`;

  function renderdays (n, text_forms) {
    var m = Math.abs(n) % 100;
    var n1 = m % 10;
    if (m > 10 && m < 20) { return text_forms[0]; }
    if (n1 > 1 && n1 < 5) { return text_forms[0]; }
    if (n1 === 1) { return text_forms[0]; }
    return text_forms[0];
  }

  function renderhours (n, text_forms) {
    var m = Math.abs(n) % 100;
    var n1 = m % 10;
    if (m > 10 && m < 20) { return text_forms[0]; }
    if (n1 > 1 && n1 < 5) { return text_forms[0]; }
    if (n1 === 1) { return text_forms[0]; }
    return text_forms[0];
  }

  function renderminutes (n, text_forms) {
    var m = Math.abs(n) % 100;
    var n1 = m % 10;
    if (m > 10 && m < 20) { return text_forms[0]; }
    if (n1 > 1 && n1 < 5) { return text_forms[0]; }
    if (n1 === 1) { return text_forms[0]; }
    return text_forms[0];
  }

  function renderseconds (n, text_forms) {
    var m = Math.abs(n) % 100;
    var n1 = m % 10;
    if (m > 10 && m < 20) { return text_forms[0]; }
    if (n1 > 1 && n1 < 5) { return text_forms[0]; }
    if (n1 === 1) { return text_forms[0]; }
    return text_forms[0];
  }

  return (
    <section className="timer">
      <div className="timer__header">
        <div className="timer__trait"></div>
      </div>
      <div className="timer__figure"></div>
      <div className="timer__block">
        <p className="timer__title">Days until our wedding day</p>
        <div className="timer__bloks">
          <div className="timer__block-info">
            <p className="timer__number timer__number_var_day">{days}</p>
            <p className="timer__text">{resultdays}</p>
          </div>
          <div className="timer__block-info">
            <p className="timer__number timer__number_var_hour">{hours}</p>
            <p className="timer__text">{resulthours}</p>
          </div>
          <div className="timer__block-info">
            <p className="timer__number timer__number_var_min">{minutes}</p>
            <p className="timer__text">{resultminutes}</p>
          </div>
          <div className="timer__block-info">
            <p className="timer__number timer__number_var_sec">{seconds}</p>
            <p className="timer__text">{resultseconds}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timer;