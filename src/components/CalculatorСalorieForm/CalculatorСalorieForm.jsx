import React from 'react';
import css from './CalculatorСalorieForm.module.css';

function CalculatorСalorieForm() {
  return (
    <section>
      <div className={css.formWrapper}>
        <h1 className={css.title}>
          Calculate your daily calorie intake right now
        </h1>
        <form className={css.form}>
          <div className={css.calculatorForm}>
            <label>
              Heigth*
              <input type="text" />
            </label>
            <label>
              Desired weight *
              <input type="text" />
            </label>
            <label>
              Age*
              <input type="text" />
            </label>
            <label className={css.inputBlood}>
              Blood type*
              <input type="text" disabled />
              <span>
                <label>
                  <input type="radio" value="1" name="blood" />1
                </label>
                <label>
                  <input type="radio" value="2" name="blood" />2
                </label>
                <label>
                  <input type="radio" value="3" name="blood" />3
                </label>
                <label>
                  <input type="radio" value="4" name="blood" />4
                </label>
              </span>
            </label>
            <label>
              Current weight *
              <input type="text" />
            </label>
          </div>
          <button className={css.btnSubmitFrom}>Start losing weight</button>
        </form>
      </div>
    </section>
  );
}

export default CalculatorСalorieForm;
