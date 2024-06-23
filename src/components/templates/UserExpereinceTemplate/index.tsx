import React from 'react';
import { Box, styled } from '@mui/material';

interface UserExperienceTemplateProps {
  content: React.ReactNode;
}

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: 'gray',
  [theme.breakpoints.down('sm')]: {
    padding: '20px',
    height: 'auto',
  },
}));

const UserExperienceTemplate: React.FC<UserExperienceTemplateProps> = ({ content }) => {
  return <StyledBox>{content}</StyledBox>;
};

export default UserExperienceTemplate;
