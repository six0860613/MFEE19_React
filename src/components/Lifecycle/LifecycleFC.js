import React, { useState, useEffect, useRef } from 'react';

const initialState = () => {
  console.log('initialState(like constructor in CC)');
  return 0;
};

function LifecycleFC(props) {
  const [total, setTotal] = useState(initialState());
  //   const [didMount, setDidMount] = useState(false);
  const didMountRef = useRef(false);

  // 模擬componentDidMount
  useEffect(() => {
    // didMount
    console.log('componentDidMount(模擬)');
    // setDidMount(true);
  }, []);

  // 模擬componentDidUpdate + componentDidMount
  useEffect(() => {
    console.log('componentDidUpdate + componentDidMount(模擬)', total);
  }, [total]);

  // 模擬componentDidUpdate
  //   useEffect(() => {
  //     if (didMount) {
  //       console.log('componentDidUpdate+componentDidMount(模擬)', total);
  //     }
  //   }, [total]);

  useEffect(() => {
    if (didMountRef.current) {
      console.log('componentDidUpdate+componentDidMount(模擬)', total);
    } else {
      didMountRef.current = true;
    }
  }, [total]);

  // 模擬componentWillUnmount
  useEffect(() => {
    return () => {
      console.log('componentWillUnmount(模擬)', total);
    };
  }, [total]);

  return (
    <>
      <div className="container">
        {console.log('render')}
        <h1
          onClick={() => {
            setTotal(total + 1);
          }}
        >
          {total}
        </h1>
      </div>
    </>
  );
}

export default LifecycleFC;
