import React, {useState, useRef} from "react";
import Title from "../Title/Title";
import "./Rsvp.css";

function Rsvp() {
  const formRef = useRef(null)
  const scriptUrl = "https://script.google.com/macros/s/AKfycby_BYT6LzPV3FZHn66CPeQcYu6bE5b3ZBjuvAoU08L_RdiIzQ7viRTg5mtfej77Y_iK/exec"
  const [loading, setLoading] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [isSubmitChange, setIsSubmitChange] = useState(true);

  function renderSubmitNo () {
    setIsSubmitChange(false)
  }

  function renderSubmitYes() {
    setIsSubmitChange(true)
  }

  const handleSubmitNo = (e) =>{
    e.preventDefault()
    setLoading(true)
    const FormNew = new FormData(formRef.current);
    FormNew.append('Form', 'rsvp-no');

    fetch(scriptUrl, {
    method: 'POST',
    body: FormNew,

}).then(res => {
        setLoading(false);
        setIsFormVisible(false);
    })
    .catch(err => console.log(err))
}
  
  const handleSubmitYes = (e) =>{
      e.preventDefault()
      setLoading(true)
      const FormNew = new FormData(formRef.current);
      FormNew.append('Form', 'rsvp-yes');

      fetch(scriptUrl, {
      method: 'POST',
      body: FormNew,

  }).then(res => {
          setLoading(false);
          setIsFormVisible(false);
      })
      .catch(err => console.log(err))
  }

  function returnForm () {
    setIsFormVisible(true);
  }

  return (
    <section className="rsvp" id="rsvp">
      <Title title={"RSVP"}/>
      { isFormVisible ?
      <div className="rsvp__container">
        <p className="rsvp__text">Please reply by 20 April 2023 <br/> To let us know if you can attend our wedding</p>
        <form className="rsvp__form" ref={formRef} name="rsvp" id="rsvp" onSubmit={isSubmitChange ? handleSubmitYes : handleSubmitNo}>
          <p className="rsvp__string">
            <label htmlFor="name" className="rsvp__label">First Name</label>
            <input type="text" name="Имя и Фамилия" id="name" required className="rsvp__input"></input>
          </p>
          <p className="rsvp__string">
            <label htmlFor="person" className="rsvp__label">Last name</label>
            <input type="text" name="Имя и Фамилия" id="name" required className="rsvp__input"></input>
          </p>
          <div className="rsvp__buttons">
          <button className="rsvp__button" name="Принято" onClick={renderSubmitYes} disabled={loading ? true : false}>{loading ? "sending..." : "Yes, I’ll be there"}</button>
          <button className="rsvp__button" name="Отклонено" onClick={renderSubmitNo} disabled={loading ? true : false}>{loading ? "sending..." : "Can’t make it"}</button>
          </div>
        </form>
      </div> :
      <div>
        <p className="rsvp__answer">Your vote is taken into account</p>
      </div>
      } 
    </section>
  );
}

export default Rsvp;