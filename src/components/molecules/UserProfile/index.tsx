import React from 'react';
import Typography from '@mui/material/Typography';
import { useUser } from '../../context/UserContext';

const UserProfile: React.FC = () => {
  const { user } = useUser();

  return (
    <div>
      <Typography variant="h6">{`Name: ${user.name}`}</Typography>
      <Typography variant="h6">{`Age: ${user.age}`}</Typography>
    </div>
  );
};

export default UserProfile;
