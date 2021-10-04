import React, { useState } from 'react';
import LifecycleCC from '../components/Lifecycle/LifecycleCC';
import LifecycleFC from '../components/Lifecycle/LifecycleFC';

function Lifecycle() {
  const [isLive, setIsLive] = useState(true);
  const [isLive2, setIsLive2] = useState(true);
  return (
    <>
      {isLive && <LifecycleCC />}
      <button
        onClick={() => {
          setIsLive(!isLive);
        }}
      >
        SWITCH 1
      </button>
      <hr />
      {isLive2 && <LifecycleFC />}
      <button
        onClick={() => {
          setIsLive2(!isLive2);
        }}
      >
        SWITCH 2
      </button>
    </>
  );
}

export default Lifecycle;
