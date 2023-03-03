import React, {useState, useRef} from "react";
import Title from "../Title/Title";
import "./Questions.css";

function Questions() {
  const formRef = useRef(null)
  const scriptUrl = "https://script.google.com/macros/s/AKfycby_BYT6LzPV3FZHn66CPeQcYu6bE5b3ZBjuvAoU08L_RdiIzQ7viRTg5mtfej77Y_iK/exec"
  const [loading, setLoading] = useState(false);
  const [isFormVisible, setisFormVisible] = useState(true);

  const handleSubmit = (e) =>{
      e.preventDefault();
      setLoading(true);
      const FormNew = new FormData(formRef.current);
      FormNew.append('Form', 'questions');

      fetch(scriptUrl, {
      method: 'POST',
      body: new FormData(formRef.current),

  }).then(res => {
          setLoading(false);
          setisFormVisible(false);
      })
      .catch(err => console.log(err))
  }
  
  return (
    <section className="question" id="questions">
      { isFormVisible ?
        <div className="question__container">
          <form className="question__form" ref={formRef} onSubmit={handleSubmit}>
          <fieldset className="question__string">Please let us know your preferred meal choice:
            <label  htmlFor="chicken" className="question__label">
              <input className="question__unvisible" type="checkbox" name="Еда" value="Beef" id="Beef"></input>
              <span className="question__visible-checkbox"></span>
              <span className="question__text-span">Beef</span>
            </label>
            <label htmlFor="fish" className="question__label">
              <input className="question__unvisible" type="checkbox" name="Еда" value="Chicken" id="Chicken"></input>
              <span className="question__visible-checkbox"></span>
              <span className="question__text-span">Chicken</span>
            </label>
            <label htmlFor="meat" className="question__label">
              <input className="question__unvisible" type="checkbox" name="Еда" value="Fish" id="Fish"></input>
              <span className="question__visible-checkbox"></span>
              <span className="question__text-span">Fish</span>
            </label>
          </fieldset>
          <p className="question__string">
            <label htmlFor="alco" className="question__label-input">Any special dietary requirements:</label>
            <input type="text" name="Алкоголь" id="alco" required className="question__input"></input>
          </p>
          <button type="submit" className="question__button" disabled={loading ? true : false}>{loading ? "sending..." : "Reply"}</button>
        </form> 
      </div>
      :
      <p className="question__text">Your vote is taken into account</p>
      }
      
    </section>
  );
}

export default Questions;