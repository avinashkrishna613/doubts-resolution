import React from 'react';
import Typography from '../../atoms/Typography';
import Button from '../../atoms/Button';
import useUser from '../../hook/useUser';


const UseReducerComponent: React.FC = () => {
  const { user, setUser } = useUser({ name: 'John Doe', age: 30 });

  const updateUser = () => {
    setUser({ name: 'Jane Smith', age: 25 });
  };

  return (
    <div>
      <Typography>Name: {user.name}</Typography>
      <Typography>Age: {user.age}</Typography>
      <Button onClick={updateUser}>Update User</Button>
    </div>
  );
};

export default UseReducerComponent;
