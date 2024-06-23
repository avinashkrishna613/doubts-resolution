import React from 'react';
import Button from '../../atoms/Button';

interface IncrementButtonProps {
  increment: () => void;
}

const IncrementButton: React.FC<IncrementButtonProps> = React.memo(({ increment }) => {
  console.log('Button re-rendered');
  return <Button onClick={increment}>Increment</Button>;
});

export default IncrementButton;
