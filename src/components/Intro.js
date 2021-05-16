import React from 'react';
import classes from './Intro.module.css';

const Intro = (props) => {

  return (
    <div className={classes.intro}>
      <h1>Beautiful Animated Cards</h1>
      <p>My experimental <span className={classes.value_span}>{props.pVal}</span> project</p>
    </div>
  );
};

export default Intro;
