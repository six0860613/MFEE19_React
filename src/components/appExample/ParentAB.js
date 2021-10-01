import React, { useState } from 'react';
import ChildA from './ChildA';
import ChildB from './ChildB';
import ChildC from './ChildC';
import ChildB2 from './ChildB2';

function ParentAB() {
  // 傳給ChildA
  const [parentData, setParentData] = useState('Parent給ChildA');
  // ChildB傳來的
  const [Data, setData] = useState('');
  return (
    <>
      <ChildA parentData={parentData} />
      <ChildB setData={setData} />
      <p>來自ChildB的:{Data}</p>
      <ChildC data={Data} />
      <ChildB2 setData={setData} />
      <p>來自ChildB2的:{Data}</p>
    </>
  );
}

export default ParentAB;
