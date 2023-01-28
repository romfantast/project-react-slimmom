import React from 'react';
import css from './RightSideBar.module.css';

function RightSideBar() {
  return (
    <div className={css.container}>
      <div>
        <h3>Summary for 20/06/2020</h3>
        <p>
          <span>Left</span> <span>000 kcal</span>
        </p>
        <p>
          <span>Consumed</span> <span>000 kcal</span>
        </p>
        <p>
          <span>Daily rate</span> <span>000 kcal</span>
        </p>
        <p>
          <span>n% of normal</span> <span>000 kcal</span>
        </p>
      </div>
      <div>
        <h3>Food not recommended</h3>
        <p>Your diet will be displayed here</p>
      </div>
    </div>
  );
}

export default RightSideBar;
