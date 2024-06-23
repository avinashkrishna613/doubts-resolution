import React from 'react';
import Button from '../../atoms/Button';
import { useUser } from '../../context/UserContext';

const UpdateUser: React.FC = () => {
  const { setUser } = useUser();

  const updateUser = () => {
    setUser({ name: 'Jane Smith', age: 25 });
  };

  return <Button onClick={updateUser}>Update User</Button>;
};

export default UpdateUser;
