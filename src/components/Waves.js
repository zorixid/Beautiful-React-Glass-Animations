import React from 'react';
import classes from './Waves.module.css'

const Waves = (props) => {
  return (
    <div className={classes.wave_container}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f3f4f5"
        //   fillOpacity="0.16"
          d="M0,64L34.3,74.7C68.6,85,137,107,206,106.7C274.3,107,343,85,411,112C480,139,549,213,617,218.7C685.7,224,754,160,823,138.7C891.4,117,960,139,1029,160C1097.1,181,1166,203,1234,202.7C1302.9,203,1371,181,1406,170.7L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>
     {props.children}
    </div>
  );
};

export default Waves;
