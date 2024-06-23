import React, { useState, useCallback } from 'react';
import Typography from '../../atoms/Typography';
import IncrementButton from '../../molecules/IncrementButton';


const UseCallbackComponent: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <Typography>Count: {count}</Typography>
      <IncrementButton increment={increment} />
    </div>
  );
};

export default UseCallbackComponent;
