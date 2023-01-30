import React from 'react';
import CalculatorСalorieForm from 'components/CalculatorСalorieForm/CalculatorСalorieForm';
import RightSideBar from 'components/RightSideBar/RightSideBar';
import css from './CalculatorPage.module.css';

function CalculatorPage() {
  return (
    <section>
      <div className={css.flexContainer}>
        <CalculatorСalorieForm />
        <RightSideBar />
      </div>
    </section>
  );
}

export default CalculatorPage;
