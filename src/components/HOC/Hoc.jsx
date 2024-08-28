import React, { useState } from 'react';

const Hoc = (WrappedComponent) => {
  return (props) => {
    const [num, setNum] = useState(0);

    const handleEvent = () => {
      setNum(num + 10);
    };

    return (
      <WrappedComponent
        num={num}
        handleEvent={handleEvent}
        
      />
    );
  };
};

export default Hoc;
