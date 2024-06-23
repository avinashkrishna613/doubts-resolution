import React, { useState, useEffect } from 'react';
import Button from '../../atoms/Button';
import Typography from '../../atoms/Typography';
import { Box } from '@mui/material';

const UseHooks: React.FC = () => {
  const [name, setName] = useState('India');
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((prevNumber) => prevNumber + 2);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
<Box>
  <Box>
  <Typography variant="h2">UseState</Typography>
        <Typography variant="h3">Welcome to {name}</Typography>
        <Button onClick={() => setName('Hyderabad')}>Submit</Button>

  </Box>
  <Box>
  <Typography variant="h2">UseEffect</Typography>
        <Typography>Even Numbers: {number}</Typography>

  </Box>

</Box>      
     
  );
};

export default UseHooks;
