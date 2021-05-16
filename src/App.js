import React, { useState } from 'react';
import GlassItems from './components/GlassItems';
import Intro from './components/Intro';
import Waves from './components/Waves';

function App() {
  const [pVal, setPVal] = useState('React.js');

  const valChangeHandler = (receivedVal) => {
    setPVal(receivedVal);
  };

  return (
    <div>
      <Waves>
        <Intro pVal={pVal} />
        <GlassItems changeVal={valChangeHandler}/>
        <footer>
          <br></br>
          <h4>
            Justinas Kairys <span>&#169;</span> 2021
          </h4>
          <br></br>
        </footer>
      </Waves>
    </div>
  );
}

export default App;
