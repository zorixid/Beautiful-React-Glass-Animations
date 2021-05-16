import React, { useState } from 'react';
import classes from './GlassItems.module.css';
const image1 = require('../assets/img1.png');
const image2 = require('../assets/img2.png');
const image3 = require('../assets/img3.png');
const image4 = require('../assets/img4.png');
const image5 = require('../assets/img5.png');

const GlassItems = (props) => {
  const [stylingState, setStylingState] = useState({
    box_1: classes.child_1,
    box_2: classes.child_2,
    box_3: classes.child_3,
    box_4: classes.child_4,
    box_5: classes.child_5,
  });

  const mouseOverHandler = () => {
    setStylingState({
      box_1: classes.child_1_alt,
      box_2: classes.child_2_alt,
      box_3: classes.child_3_alt,
      box_4: classes.child_4_alt,
      box_5: classes.child_5_alt,
    });
  };

  const mouseLeaveHandler = () => {
    setStylingState({
      box_1: classes.child_1,
      box_2: classes.child_2,
      box_3: classes.child_3,
      box_4: classes.child_4,
      box_5: classes.child_5,
    });
  };

  const itemClicked = (target) => {
    props.changeVal(target);
  };

  return (
    <div className={classes.parent}>
      <div
        className={classes.box}
        onMouseEnter={mouseOverHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        <div
          className={stylingState.box_1}
          onClick={() => {
            itemClicked('GraphQL');
          }}
        >
          <img
            src={image1.default}
            alt="Graph"
            className={classes.image1}
          />
        </div>
        <div
          className={stylingState.box_2}
          onClick={() => {
            itemClicked('MongoDB');
          }}
        >
          <img
            src={image2.default}
            alt="Mongo"
            className={classes.image2}
          />
        </div>
        <div></div>
        <div></div>
        <div
          className={stylingState.box_3}
          onClick={() => {
            itemClicked('Node.js');
          }}
        >
          <img
            src={image3.default}
            alt="Node"
            className={classes.image3}
          />
        </div>
        <div></div>
        <div></div>
        <div
          className={stylingState.box_4}
          onClick={() => {
            itemClicked('Web3.js');
          }}
        >
          <img
            src={image4.default}
            alt="Web3"
            className={classes.image4}
          />
        </div>
        <div
          className={stylingState.box_5}
          onClick={() => {
            itemClicked('Solidity');
          }}
        >
          <img
            src={image5.default}
            alt="Solidity"
            className={classes.image5}
          />
        </div>
        <div className={classes.box_border}></div>
      </div>
    </div>
  );
};

export default GlassItems;
